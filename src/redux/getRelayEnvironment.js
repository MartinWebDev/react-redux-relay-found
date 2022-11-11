import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import schema from '../data/schema';

export const getRelayEnvironment = (fetcher) => {
  // const environment = new Environment({
  //   network: Network.create((...args) => fetcher && fetcher.fetch(...args)),
  //   store: new Store(new RecordSource()),
  // });

  // return environment;

  const environment = new Environment({
    network: Network.create({ schema }),
    store: new Store(new RecordSource()),
  });

  return environment;
}
