import { APP_CONFIG as CONF_PROD } from './../config/production';
import { APP_CONFIG as CONF_TEST } from './../config/test';

export const environment = {
  production: true,
  serviceWorker: {
    enabled: true
  },
  CONFIG: { ...CONF_PROD, ...CONF_TEST }
};
