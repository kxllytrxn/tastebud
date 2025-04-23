import defaultRecipes from "../data/fakeRecipe";

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


const POSTS_KEY = 'tastebud-posts'; // could also call this 'tastebud-recipes'
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
    