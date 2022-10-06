import express from 'express';
import mongoose from "mongoose";

const app = express()
const port = 8000


app.use('/api/fees', (req, res) => {
    res.status(200).json({
        status: `Ok`
    });
});

app.use('/api/compute-transaction-fee', (req, res) => {
    res.status(200).json({
        status: `Ok>>>`
    });
});

app.use('/', (req, res) => {
    res.status(200).json({
        message: `LANNISTER PAY (NodeJS Assessment)`
    });
});

// // Connect to DB
// mongoose.connect('', {useNewUrlParser: true}, () =>  console.log('Db connected>>>')
// )



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
