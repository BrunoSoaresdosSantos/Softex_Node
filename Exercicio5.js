const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('GET')
})

app.post('/', (req, res) => {
  res.send('POST')
})

app.put('/', (req, res) => {
  res.send('PUT')
})

app.delete('/', (req, res) => {
  res.send('DELETE')
})

app.listen(8080, () => {
  console.log('rodando na porta 8080')
})
//Execute o comando node Exercicio5.js no terminal para iniciar o servidor;
//Abra o insomnia e acesse a URL http://localhost:8080/ para fazer uma requisição GET,POST,PUT e DELETE.