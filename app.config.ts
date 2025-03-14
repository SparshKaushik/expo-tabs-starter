/* eslint-disable max-lines-per-function */
import type { ConfigContext, ExpoConfig } from '@expo/config';

import { env } from './src/env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: env.NAME,
  description: `${env.NAME} Mobile App`,
  owner: env.EXPO_ACCOUNT_OWNER,
  scheme: env.SCHEME,
  slug: env.SCHEME,
  version: env.VERSION?.toString(),
  orientation: 'portrait',
  icon: env.APP_ENV === 'production' ? './assets/images/icon.png' : './assets/images/icon.dev.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: env.PACKAGE,
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#2E3C4B',
    },
    package: env.PACKAGE,
  },
  web: {
    favicon: './assets/images/favicon.png',
    bundler: 'metro',
  },
  plugins: [
    [
      'expo-splash-screen',
      {
        backgroundColor: '#2E3C4B',
        image: './assets/images/splash-icon.png',
        imageWidth: 150,
      },
    ],
  ],
  extra: {
    eas: {
      projectId: env.EAS_PROJECT_ID,
    },
  },
});
