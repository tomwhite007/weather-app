import { environmentCommon } from './environment-common';
import { EnvironmentModel } from './environment-model';

export const environment: EnvironmentModel = {
  production: false,
  ...environmentCommon(),
};
