// TODO: ADD UTILS FOR POST-RELATED CALLS SUCH AS getPosts

const POSTS_KEY = 'tastebud-posts'; // could also call this 'tastebud-recipes'

// Get all saved posts
export const getAllPosts = () => {
    const data = localStorage.getItem(POSTS_KEY);
    return data ? JSON.parse(data) : [];
  };
  
  // Save a new post
  export const savePost = (post) => {
    const posts = getAllPosts();
    posts.push(post);
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  };
  
  // Get a single post by ID
  export const getPostById = (id) => {
    const posts = getAllPosts();
    return posts.find(post => post.id === id);
  };
  
  // Overwrite all posts
  export const setAllPosts = (posts) => {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  };
  
  // Optional: remove post by ID
  export const deletePostById = (id) => {
    const posts = getAllPosts();
    const filtered = posts.filter(post => post.id !== id);
    localStorage.setItem(POSTS_KEY, JSON.stringify(filtered));
  };
  