import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { createFragmentContainer, graphql } from 'react-relay';

import AddTodoMutation from '../mutations/AddTodoMutation';
import * as appActions from '../redux/reducers/appActions';
import TodoListFooter from './TodoListFooter';
import TodoTextInput from './TodoTextInput';

const propTypes = {
  viewer: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  relay: PropTypes.object.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  userLogin: PropTypes.func,
  userLogout: PropTypes.func,
};

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    console.log('App props -> ', props);
  }

  onNewTodoSave = (text) => {
    const { relay, viewer } = this.props;

    AddTodoMutation.commit(relay.environment, viewer, text);
  };

  render() {
    const { viewer, children } = this.props;

    return (
      <div data-framework="relay">
        <section className="user-navbar">
          Hello {this.props.user.username}
          <button type="button" onClick={this.props.userLogin}>
            Login
          </button>
          <button type="button" onClick={() => this.props.userLogout()}>
            Logout
          </button>
        </section>

        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <TodoTextInput
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onSave={this.onNewTodoSave}
            />
          </header>

          {children}

          <TodoListFooter viewer={viewer} />
        </section>

        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>
            Adapted by <a href="http://fashionablenonsense.com/">@jimmy_jia</a> from work by the{' '}
            <a href="https://facebook.github.io/relay/">Relay team</a>
          </p>
          <p>
            Previously part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
          <p>
            Further enhanced with additional libraries by <a href="https://github.com/MartinWebDev">@MartinWebDev</a>
          </p>
        </footer>
      </div>
    );
  }
}

TodoApp.propTypes = propTypes;

const Component = createFragmentContainer(TodoApp, {
  viewer: graphql`
    fragment TodoApp_viewer on User {
      id
      ...TodoListFooter_viewer
    }
  `,
});

const mapStateToProps = (state, props) => {
  console.group('=== mapStateToProps ===');
  console.log('state', state);
  console.log('props', props);
  console.groupEnd();
  return {
    user: {
      username: state.app.user.username,
      email: state.app.user.email,
    },
  };
};

const mapDispatchToProps = {
  ...appActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
