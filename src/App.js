import { BrowserProtocol } from 'farce';
import { createConnectedRouter, createRender } from 'found';
import React from 'react';
import { Provider } from 'react-redux';

import { createStore } from './redux/createStore';
import { getFetcherResolver } from './redux/getFetcherResolver';

const ConnectedRouter = createConnectedRouter({ render: createRender({}) });

const store = createStore(new BrowserProtocol());
const resolver = getFetcherResolver();

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter resolver={resolver} />
      {/* <ConnectedRouter resolver={resolver} initialRenderArgs={} matchContext={} /> */}
    </Provider>
  );
}
