const video = require('../components/video/network.js');

const routes = (server) => {
    server.use('/videogames', video);
}

module.exports = routes;