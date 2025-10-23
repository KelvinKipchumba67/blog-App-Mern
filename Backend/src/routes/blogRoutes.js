// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Routes for getting all posts and creating a new post
router
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.createPost);

// Routes for getting, updating, and deleting a single post by its ID
router
  .route('/:id')
  .get(postController.getPostById)
  .patch(postController.updatePost) // Note: PATCH is often preferred over PUT for updates
  .delete(postController.deletePost);

module.exports = router;