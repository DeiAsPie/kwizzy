import { getServerSession, type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "@/env";
import bcrypt from "bcrypt";
import * as z from "zod";

const prisma = new PrismaClient();

const SignUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

const useSecureCookies = env.VERCEL_ENV === "production";
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const cookieDomain = useSecureCookies ? "kwizzy.fun" : undefined;

export const options: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    // // Todo: Customize to login via SMS / OTP
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        name: {
          label: "Name",
          type: "string",
        },
        email: {
          label: "Email:",
          type: "email",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Password",
        },
        method: {
          type: "login" || "signup",
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        console.log(credentials.method);
        const method = credentials.method;
        if (method === "signup") {
          const res = SignUpSchema.safeParse({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          });
          console.log(res);
          if (res.success) {
            const hash = bcrypt.hashSync(res.data.password, 10);
            const user = await prisma.user.create({
              data: {
                name: res.data.name,
                email: res.data.email,
                password: hash,
              },
            });
            console.log(user);
            return user;
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      profile(profile: GoogleProfile) {
        console.log(profile);
        return {
          role: profile.role ?? "USER",
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.sub;
      }
      return token;
    },
    // session: ({ session, token, user }) => {
    //   if (token) {
    //     session.user.email = token.email;
    //     session. = token.accessToken;
    //   }
    //   return session;
    // },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
  },
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        domain: cookieDomain,
        secure: useSecureCookies,
      },
    },
  },
  pages: {
    signIn: "/login",
    error: "/login/error", // Error code passed in query string as ?error=
    verifyRequest: "/login/verify", // (used for check email message)
    newUser: "/quiz/home", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export const getServerAuthSession = () => {
  return getServerSession(options);
};
