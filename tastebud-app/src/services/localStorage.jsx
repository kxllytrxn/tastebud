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