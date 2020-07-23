import express from 'express';
import cors from 'cors';

 // ? ROUTES
import indexRoutes from './routes/index';
import flashcardRoutes from './routes/flashcards';
import usersRoutes from './routes/users';


export module usersRepository {

    const app = express();

    app.use(cors());

    app.use('/', indexRoutes.indexRouter);
    app.use('/flashcards', flashcardRoutes.flashcardsIndex);
    app.use('/users', usersRoutes.userRouter);
    // PORT
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}...`));



}