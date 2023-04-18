import { Environment, Network, RecordSource, Store } from 'relay-runtime';

export const getRelayEnvironment = (fetcher) => {
  const environment = new Environment({
    network: Network.create(fetcher),
    store: new Store(new RecordSource()),
  });

  return environment;
};
