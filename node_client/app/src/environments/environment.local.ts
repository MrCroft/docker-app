import { APP_CONFIG as CONF_PROD } from '../config/production';
import { APP_CONFIG as CONF_LOCAL } from '../config/local';

export const environment = {
  production: true,
  serviceWorker: {
    enabled: false
  },
  CONFIG: { ...CONF_PROD, ...CONF_LOCAL }
};
