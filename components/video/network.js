const express = require("express"); 
const router = express.Router();

const response = require('../../utils/response.js')
const controller = require('./controller.js'); 


router.get("/", async (req,res) => {
    try{
        const action = await controller.getGames();
        response.success(req,res,action,200);
    }catch (err){
        response.error(req,res,err.message,401);
    }
})