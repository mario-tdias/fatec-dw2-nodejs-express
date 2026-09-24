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

//as rotas de cadastro de clientes
route.post("/clientes/cadastrar", (req,res) => {
    //capturando os dados vindo do formulário e gravando nas variáveis
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    //chamando o model para gravar os dados no banco
    Cliente.create({
        //nome da coluna / variável
        nome: nome,
        cpf: cpf,
        endereco: endereco
    }).then(() => {
        res.redirect("/clientes");
    }).catch(error => {
        console.log(`Ocorreu um erro ao cadastrar o cliente. Erro: ${error}`);
    });
});

export default route;