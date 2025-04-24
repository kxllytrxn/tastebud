import defaultRecipes from "../data/fakeRecipe";

const LOGGED_IN_USER_KEY = 'loggedInUser';
const USERS_KEY = 'tastebud-users';
const POSTS_KEY = 'tastebud-posts';

export const isAuthenticated = () => {
  const user = localStorage.getItem(LOGGED_IN_USER_KEY);
  return !!user;
};

export const setUser = (user) => {
  localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem(LOGGED_IN_USER_KEY);
};

export const getLoggedInUser = () => {
  const userJSON = localStorage.getItem(LOGGED_IN_USER_KEY);
  return userJSON ? JSON.parse(userJSON) : null;
};

export const getAllUsers = () => {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveUserToDB = (user) => {
  const users = getAllUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getAllPosts = () => {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (posts.length === 0) {
    return defaultRecipes;
  }
  return posts;
};
    
export const savePost = (post) => {
    const posts = getAllPosts();
    posts.push(post);
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};
    
export const getPostById = (id) => {
    const posts = getAllPosts();
    return posts.find(post => post.id === id);
};
    
export const setAllPosts = (posts) => {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};
    
export const deletePostById = (id) => {
    const posts = getAllPosts();
    const filtered = posts.filter(post => post.id !== id);
    localStorage.setItem(POSTS_KEY, JSON.stringify(filtered));
};
    