export const isAuthenticated = () => {
    // checks to see if user data exists in localStorage to be authenticated
    const user = localStorage.getItem('user');    
    return user ? true : false;
};

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem('user');
};

const USERS_KEY = 'tastebud-users';

export const getAllUsers = () => {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveUserToDB = (user) => {
  const users = getAllUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};