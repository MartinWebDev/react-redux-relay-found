export const defaultAppState = {
  user: {
    username: 'Anonymous',
    email: '',
  },
};

export const AppReducer = (state = defaultAppState, action) => {
  // const { type, data } = action;
  const { type } = action;

  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          username: 'ElUser',
          email: 'user@mail.com',
        }
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {
          username: 'Anonymous',
          email: '',
        }
      };
    default:
      return state;
  }
};
