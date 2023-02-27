const express = require('express')
const app = express()

app.get('/listar/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (id === 50) {
    res.status(404).send('Não encontrado')
  } else if (id === 10) {
    res.status(200).send('Achado com sucesso')
  } 
})

app.listen(8080, () => {
  console.log('Servidor rodandno na porta 8080')
})
