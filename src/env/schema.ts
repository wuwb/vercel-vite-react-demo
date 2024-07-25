import { z } from 'zod'

export const clientSchema = z.object({
  VITE_VERCEL_GIT_COMMIT_SHA: z.string(),
  VITE_VERCEL_ENV: z.string().optional(),
  VITE_VERCEL_URL: z.string().optional(),
  VITE_PORT: z.string().optional(),
})

export const clientEnv = {
  VITE_VERCEL_GIT_COMMIT_SHA:
  import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA ?? '0.0.0',
  VITE_VERCEL_ENV: import.meta.env.VITE_VERCEL_ENV,
  VITE_VERCEL_URL: import.meta.env.VITE_VERCEL_URL,
  VITE_PORT: import.meta.env.VITE_PORT,
}
