const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected.....");
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
};
mongoose.connect(process.env.MONGO_URI)
  .then((conn) => {
     console.log(`MongoDB Connected: ${conn.connection.host}`);
     console.log(`Database Name: ${conn.connection.name}`);
  });

module.exports = connectDB;