// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { APP_CONFIG as CONF_PROD } from '../config/production';
import { APP_CONFIG as CONF_DEV } from '../config/dev';

export const environment = {
  production: true,
  serviceWorker: {
    enabled: true
  },
  CONFIG: { ...CONF_PROD, ...CONF_DEV }
};
