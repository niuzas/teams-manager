require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
const dbServer = DB_URL.split('@')[1].split('/')[0];
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB status: connected to ${dbServer}`);
    app.listen(PORT, () => console.log(`Express HTTP server status: started on TCP PORT ${PORT}`));
  } catch (e) {
    console.log('MongoDB connection error:', e.message);
    // Exit process with failure
    process.exit(1);
  }
};

start();
