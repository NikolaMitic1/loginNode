require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./db/connect');
const register = require('./routes/register');


app.use(express.json());

app.use('/api/v1/register', register);

const port = 3000;
const startServer = async() => {
    try {
       await connectDb(process.env.MONGO_URL);
       app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
       });
    } catch (error) {
        console.log(error);
    }
}

startServer()
