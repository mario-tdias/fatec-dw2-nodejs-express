import express from 'express';
//importando o model
import Cliente from "../models/Cliente.js";

const route = express.Router();

// ROTA CLIENTES
route.get("/clientes",function(req,res){
    //selecionando todos os clientes do banco de dados
    Cliente.findAll().then(clientes =>{
         res.render("clientes", {
        clientes : clientes,
    });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`);
    });

});

export default route;