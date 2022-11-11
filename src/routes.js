import React from 'react';
import { Route, makeRouteConfig } from 'found';
import { graphql } from 'react-relay';

// import TodoApp from './components/TodoApp';
// import TodoList from './components/TodoList';

const TodoListQuery = graphql`
  query routes_TodoList_Query($status: String!) {
    viewer {
      ...TodoList_viewer
    }
  }
`;

const routes = (
  <Route
    path="/"
    // Component={TodoApp}
    getComponent={async () => {
      return (await import("./components/TodoApp")).default;
    }}
    query={graphql`
      query routes_TodoApp_Query {
        viewer {
          ...TodoApp_viewer
        }
      }
    `}
  >
    <Route
      // Component={TodoList}
      getComponent={async () => {
        return (await import("./components/TodoList")).default;
      }}
      query={TodoListQuery}
      prepareVariables={(params) => ({ ...params, status: 'any' })}
    />
    <Route
      path=":status"
      // Component={TodoList}
      getComponent={async () => {
        return (await import("./components/TodoList")).default;
      }}
      query={TodoListQuery}
    />
  </Route>
);

export default makeRouteConfig(routes);