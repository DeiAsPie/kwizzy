import zod from "zod";

const envSchema = zod.object({
  NEXTAUTH_SECRET: zod.string(),
  DATABASE_URL: zod.string().startsWith("postgresql://"),
  EMAIL_SERVER: zod.string().startsWith("smtp://").nullable(),
  EMAIL_FROM: zod.string().nullable(),
  UPLOADTHING_SECRET: zod.string(),
  UPLOADTHING_APP_ID: zod.string(),
  GOOGLE_CLIENT_SECRET: zod.string(),
  GOOGLE_CLIENT_ID: zod.string(),
  VERCEL_ENV: zod.enum(["production", "development"]),
  EDGE_CONFIG: zod.string().nullable(),
});

export const env = envSchema.parse({
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  EMAIL_SERVER: process.env.EMAIL_SERVER,
  EMAIL_FROM: process.env.EMAIL_FROM,
  UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
  UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  VERCEL_ENV: process.env.VERCEL_ENV,
  EDGE_CONFIG: process.env.EDGE_CONFIG,
});
