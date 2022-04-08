const express = require("express"); 
const router = require('./utils/routes.js')

const app = express(); 


app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))

app.use(router);
app.listen(3001, () => {
    console.log("Escuchando en puerto: 3001");
})