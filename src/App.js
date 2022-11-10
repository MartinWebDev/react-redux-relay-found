import React from "react";
import HashProtocol from 'farce/HashProtocol';
import BrowserProtocol from 'farce/BrowserProtocol';
import queryMiddleware from 'farce/queryMiddleware';
import { Resolver } from 'found-relay';
import createFarceRouter from 'found/createFarceRouter';
import { Network } from 'relay-local-schema';
import { Environment, RecordSource, Store } from 'relay-runtime';
import { Provider } from 'react-redux';

import schema from './data/schema';
import routes from './routes';
import { createStore } from './redux/createStore';

const environment = new Environment({
  network: Network.create({ schema }),
  store: new Store(new RecordSource()),
});

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,
});

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router resolver={new Resolver(environment)} />
      </div>
    </Provider>
  );
}
