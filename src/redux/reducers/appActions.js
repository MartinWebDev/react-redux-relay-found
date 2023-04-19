export const userLogin = () => {
  console.log('> Create login action');
  return { type: 'LOGIN' };
};

export const userLogout = () => {
  console.log('> Create logout action');
  return { type: 'LOGOUT' };
};
