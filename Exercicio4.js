const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Bem-vindo à página inicial!');
  });

  app.get('/sobre', function(req, res) {
    res.send('pagina número 2');
  });
  
  app.get('/usuarios/:id', function(req, res) {
    const id = req.params.id;
    res.send(`Você está visualizando o perfil do usuário com id ${id}`);
  });
  
  app.get('/busca', function(req, res) {
    const query = req.query.q;
    res.send(`Você está buscando por ${query}`);
  });
  

app.listen(8080);