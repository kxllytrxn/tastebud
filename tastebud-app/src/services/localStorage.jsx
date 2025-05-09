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
  const data = JSON.parse(userJSON);
  
  // Only set a default profile image if none exists
  if (data && !data.profile_photo_url) {
    data.profile_photo_url = "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/11688145/pokemon_piplup.png?quality=90&strip=all&crop=0,3.4685863874346,100,93.062827225131";
  }
  
  return data ? data : null;
};

export const updateUser = (updatedUser) => {
  // Update the logged in user
  localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(updatedUser));
  
  // Also update the user in the users list
  const users = getAllUsers();
  const index = users.findIndex(user => user.id === updatedUser.id);
  
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  
  return updatedUser;
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
  const posts = JSON.parse(localStorage.getItem(POSTS_KEY)) || [];

  if (posts.length === 0) {
    return defaultRecipes;
  }
  return posts;
};

export const savePostToDB = (newPost) => {
  const posts = getAllPosts();
  posts.unshift(newPost);
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
    
export const editPost = (updatedPost) => {
    const posts = getAllPosts();
    const index = posts.findIndex(post => post.id === updatedPost.id);
    
    if (index !== -1) {
        posts[index] = updatedPost;
        localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
        return true;
    }
    return false;
};
    