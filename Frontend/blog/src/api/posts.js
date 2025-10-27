const API_URL = 'http://localhost:5000/api/v1/posts';

// Fetch all posts
export const fetchAllPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch posts');
  const data = await response.json();
  return data.data.posts;
};

// Create new post
export const createNewPost = async (postData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  if (!response.ok) throw new Error('Failed to create post');
  const data = await response.json();
  return data.data.post;
};

// Update post
export const updateExistingPost = async (id, postData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  if (!response.ok) throw new Error('Failed to update post');
  const data = await response.json();
  return data.data.post;
};

// Delete post
export const deletePostById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete post');
  return true;
};
