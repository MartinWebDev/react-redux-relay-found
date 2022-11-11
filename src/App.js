import React from "react";
// import BrowserProtocol from 'farce/BrowserProtocol';
import { BrowserProtocol } from 'farce';
import { Provider } from 'react-redux';
import { createConnectedRouter, createRender } from 'found';

import { createStore } from './redux/createStore';
import { getFetcherResolver } from './redux/getFetcherResolver';

const ConnectedRouter = createConnectedRouter({ render: createRender({}) });

const store = createStore(new BrowserProtocol());
const resolver = getFetcherResolver();

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter resolver={resolver} />
    </Provider>
  );
}
