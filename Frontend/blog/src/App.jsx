import { useState, useEffect, useCallback } from 'react';
import MessageBox from './components/MessageBox';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import {
  fetchAllPosts,
  createNewPost,
  updateExistingPost,
  deletePostById
} from './api/posts';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [postToEdit, setPostToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedPosts = await fetchAllPosts();
      fetchedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setPosts(fetchedPosts);
    } catch (error) {
      showMessage('error', error.message || 'Could not load posts.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSavePost = async (postData) => {
    try {
      if (postToEdit) {
        await updateExistingPost(postToEdit._id, postData);
        showMessage('success', 'Post updated successfully!');
      } else {
        await createNewPost(postData);
        showMessage('success', 'Post created successfully!');
      }
      setPostToEdit(null);
      loadPosts();
    } catch (error) {
      showMessage('error', error.message || 'Failed to save post.');
    }
  };

  const handleEditPost = (post) => {
    setPostToEdit(post);
    window.scrollTo(0, 0);
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePostById(id);
        showMessage('success', 'Post deleted successfully!');
        loadPosts();
      } catch (error) {
        showMessage('error', error.message || 'Failed to delete post.');
      }
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800">React & Express Blog</h1>
          <p className="text-xl text-gray-600 mt-2">A Full-Stack MERN Demo</p>
        </header>

        <MessageBox message={message} onClose={() => setMessage(null)} />

        <PostForm
          postToEdit={postToEdit}
          onSave={handleSavePost}
          onCancelEdit={() => setPostToEdit(null)}
        />

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
            Published Posts
          </h2>
          {loading ? (
            <div className="text-center text-gray-600">Loading posts...</div>
          ) : (
            <div className="post-list max-h-[80vh] overflow-y-auto pr-2">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <PostItem
                    key={post._id}
                    post={post}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                  />
                ))
              ) : (
                <p className="text-gray-500">No posts found. Create one above!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
