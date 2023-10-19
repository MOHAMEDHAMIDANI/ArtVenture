require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const cors = require('cors');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authRouter = require('./routes/Authentication')
const EventRouter = require('./routes/Event')
const artRouter = require('./routes/Artwork')

const authMiddleware = require('./middleware/authentication')
app.use(express.json());
// extra packages http://localhost:3000/api/ArtVenture/events
app.use(cors());
// routes
app.use('/api/ArtVenture/auth',authRouter)
app.use('/api/ArtVenture/artworks',authMiddleware ,artRouter)
app.use('/api/ArtVenture/events',authMiddleware ,EventRouter)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const MongoDB_URI = process.env.MongoDB_URI
const start = async () => {
  try {
    await connectDB(MongoDB_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
