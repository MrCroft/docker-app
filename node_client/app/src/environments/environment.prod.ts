import { APP_CONFIG } from '../config/production';

export const environment = {
  production: true,
  serviceWorker: {
    enabled: true
  },
  CONFIG: APP_CONFIG
};
