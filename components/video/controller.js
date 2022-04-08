const store = require("./store.js"); 

const getGames = () => {
    return new Promise(async(resolve,reject) => {
        resolve("Video Juegos obtenidos");
    })
}

module.exports = {
    getGames,
}