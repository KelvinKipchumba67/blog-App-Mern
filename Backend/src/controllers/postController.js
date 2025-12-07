// controllers/postController.js
const Post = require('../models/blog');

// CREATE a new post
exports.createPost = async (req, res) => {
  try {
    // The data for the new post is in the request body
    const newPost = await Post.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// READ all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // .find() with no arguments gets all documents
    // console.log("Posts found in DB:", posts);
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err.message });
  }
};

// READ a single post by ID
exports.getPostById = async (req, res) => {
  try {
    // The ID comes from the URL parameters (e.g., /posts/123)
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ status: 'fail', message: 'No post found with that ID' });
    }
    res.status(200).json({ status: 'success', data: { post } });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err.message });
  }
};

// UPDATE a post by ID
exports.updatePost = async (req, res) => {
  try {
    // Find the document by ID and update it with the data in req.body
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // This option returns the updated document
      runValidators: true, // This ensures the new data follows the schema rules
    });
    if (!post) {
      return res.status(404).json({ status: 'fail', message: 'No post found with that ID' });
    }
    res.status(200).json({ status: 'success', data: { post } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// DELETE a post by ID
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ status: 'fail', message: 'No post found with that ID' });
    }
    // A 204 status means "No Content", which is standard for successful deletions
    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err.message });
  }
};