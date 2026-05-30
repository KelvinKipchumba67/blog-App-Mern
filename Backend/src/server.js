// In server.js or app.js
const postRouter = require('./routes/blogRoutes');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB  = require('./config/db');




dotenv.config();

const app = express();
app.use(cors({
  origin: ['https://blog-app-mern-tau.vercel.app'],
  credentials: true
}));
// Middleware: parse JSON
app.use(express.json());
app.use(cors());
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

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));