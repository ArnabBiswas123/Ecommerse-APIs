const express = require('express');
const connectDB = require('./db/connect')
const userRouter = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./routes/error')
const productRouter = require('./routes/productRoutes')
const cartRouter = require('./routes/cartRoutes')
const orderRouter = require('./routes/orderRoutes')
const app = express();
const port = process.env.PORT || 5000

require('dotenv').config();


const cors = require('cors');
app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.send('SRBLG ECOMMERSE API')
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/carts', cartRouter);
app.use('/api/v1/orders', orderRouter);


app.use(notFound)
app.use(errorHandler)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start();