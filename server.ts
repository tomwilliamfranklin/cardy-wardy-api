import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// ? importin' the routes
import authRoutes from './routes/auth';
import indexRoutes from './routes/index';
import flashcardRoutes from './routes/flashcards';
import usersRoutes from './routes/users';

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

//Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/flashcards', flashcardRoutes);
app.use('/users', usersRoutes);

//Connect to DB
mongoose.connect(
    process.env.DB_HOST ? process.env.DB_HOST : '', 
{ useNewUrlParser: true,  useUnifiedTopology: true }, () => {
    // Successfully connected to the database!! Yeehaw
    console.log('Connected to MongoDB server successfully.');
});

// overwriting mongooses promise to globals promise. 
mongoose.Promise = global.Promise;

// I'v been to the port 3000..
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));



    