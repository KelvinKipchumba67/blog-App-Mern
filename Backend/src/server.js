const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB  = require('./config/db');
const postRouter = require('./routes/blogRoutes');

// Load environment variables first
dotenv.config();

const app = express();

// 1. Configure CORS exactly ONCE
app.use(cors({
  origin: 'https://blog-app-mern-tau.vercel.app', // Using your specific frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// 2. Middleware: parse JSON
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/v1/posts', postRouter);

// Default route (HOME Page)
app.get("/", (req, res) => {
    res.send("API Server for Express JS is up and running....");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));