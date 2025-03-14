import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  },

  client: {
    VERSION: z.coerce.number().default(1),

    API_HOST: z.string().min(1),

    NAME: z.string().min(1),
    EXPO_ACCOUNT_OWNER: z.string().min(1),
    SCHEME: z.string().min(1),
    PACKAGE: z.string().min(1),
    EAS_PROJECT_ID: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    VERSION: process.env.VERSION,
    NAME: process.env.NAME,
    EXPO_ACCOUNT_OWNER: process.env.EXPO_ACCOUNT_OWNER,
    SCHEME: process.env.EXPO_PUBLIC_SCHEME,
    PACKAGE: process.env.PACKAGE,
    EAS_PROJECT_ID: process.env.EAS_PROJECT_ID,
    API_HOST: process.env.EXPO_PUBLIC_API_HOST,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
