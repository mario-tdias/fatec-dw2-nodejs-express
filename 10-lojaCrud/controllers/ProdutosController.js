import express from 'express';

import Produto from "../models/Produto.js";

const route = express.Router();

// ROTA PRODUTOS
route.get("/produtos",function(req,res){
   Produto.findAll().then(produtos =>{
        res.render("produtos", {
        produtos: produtos
    });
   }).catch(error => {
    console.log(`Ocorreu um erro ao listar os produtos. Erro: ${error}`);
   });
   

});

export default route;