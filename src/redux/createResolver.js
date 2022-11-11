import { Resolver } from 'found-relay';

import { getRelayEnvironment } from './getRelayEnvironment';

export const createResolver = (fetcher) => {
  const environment = getRelayEnvironment(fetcher);

  return new Resolver(environment);
};
