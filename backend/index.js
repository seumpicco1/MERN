import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
// import { Book } from './models/bookModel.js';
import booksRoute from './routes/route.js'
import cors from 'cors';
const app = express();

app.use(express.json())

// allow cross origin
app.use(cors())

// app.use(
//     cors({
//         origin: 'http://127.0.0.1:5173/', 
//         methods: ['GET','POST','DELETE','PUT'],
//         allowedHeaders: ['Content-Type'],
// }))

app.get('/', (request, respone) => {
    console.log(request);
    return respone.status(200).send('Hello world fron req and res ')
})

app.use('/books', booksRoute)



mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        })
    })
    .catch((error) => { console.log(error) });