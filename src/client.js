import React from 'react';
import ReactDOM from 'react-dom/client';
import 'todomvc-common';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import App from './App';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   mountNode
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(mountNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
