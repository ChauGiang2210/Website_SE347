const userRouter = require('./user');
const productRouter = require('./product');
const addressRouter = require('./address');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const chatRouter = require('./chat');

function routes(app) {
    app.use('/api/user', userRouter);
    app.use('/api/product', productRouter);
    app.use('/api/address', addressRouter);
    app.use('/api/cart', cartRouter);
    app.use('/api/order', orderRouter);
    app.use('/api/chat', chatRouter);
}

module.exports = routes;
