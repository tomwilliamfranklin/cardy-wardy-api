import express from 'express';
import cors from 'cors';
require('dotenv').config()
 // ? ROUTES

import indexRoutes from './routes/index';
import flashcardRoutes from './routes/flashcards';
import usersRoutes from './routes/users';
import mongoose from 'mongoose';


const app = express();


app.use(express.json());
app.use(cors());

//Routes
app.use('/', indexRoutes);
app.use('/flashcards', flashcardRoutes);
app.use('/users', usersRoutes);

//Connect to DB
mongoose.connect(
    process.env.DB_HOST ? process.env.DB_HOST : '', 
{ useNewUrlParser: true,  useUnifiedTopology: true }, () => {
    console.log('Connected to MongoDB server successfully.');
});

// overwriting mongooses promise to globals promise. 
mongoose.Promise = global.Promise;

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));



    