import { getApiAuthToken } from './config';

export const environment = {
  production: false,
  apiAuthToken: getApiAuthToken(),
  apiUrl: 'https://api.themoviedb.org/3',
  version: 0.1,
};
