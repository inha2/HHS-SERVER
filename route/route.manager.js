const userRoute = require('./v1/user.route');
const helloRoute = require('./v1/hello.route');

const routeManager = (app) => {
    // API V1 Routes
    app.use('/v1/', helloRoute);
    app.use('/v1/user', userRoute);
};

module.exports = routeManager;

// [POST] http://localhost:4000/v1/user
/**
 *
 * {
 *    'id' : 'inna',
 *    'password' : '1234'
 * }
 *
 */
