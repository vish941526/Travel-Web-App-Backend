const express = require('express')
const dotenvfile = require('dotenv');
const cors = require('cors');
dotenvfile.config();
const PORT = 3500;
const mongoose = require('mongoose');
const hostelRouter = require('./router/hotelRouter');
const categoryRouter = require('./router/categoryRouter');
const dataAddedToDb = require('./router/dataAddedToDb');
const categoryAddedToDb = require('./router/categoryAddedToDb');
const SingleHotelRouter = require('./router/singleHotelRouter');
const authRouter = require('./router/user.authRouter');
const wishlistRouter = require('./router/wishlistRouter');
const connectDB = require('./config/dbconfig');
const app = express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Hello user server is Started");
});
app.use('/api/hotels',hostelRouter)
app.use('/api/categories',categoryRouter);
app.use('/api/dataAddedToDb',dataAddedToDb)
app.use('/api/categoryAddedToDb',categoryAddedToDb)
app.use('/api/hotels',SingleHotelRouter);
app.use('/api/auth',authRouter);
app.use('/api/wishlist',wishlistRouter);
connectDB();
mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
      console.log("Server is Up and Running");
    });
  });