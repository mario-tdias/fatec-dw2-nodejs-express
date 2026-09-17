// Importando o Express
import express from 'express';
// importando arquivo de conexão do sequelize
import connection from './config/sequelize-config.js';
// Iniciando o Express 
const app = express() ;
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs');
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'));

// realizando a conexão com o banco de dados
connection.authenticate().then(() =>{
    //sucesso na promessa:
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
    console.log(`Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`);
})

import ClienteController from './controllers/ClienteController.js';
import ProdutosController from './controllers/ProdutosController.js';
import PedidosController from './controllers/PedidosController.js';

app.use("/",ClienteController);
app.use("/",ProdutosController);
app.use("/",PedidosController);

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})