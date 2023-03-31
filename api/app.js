import express from 'express'
import cors from 'cors'
import config from './config.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const {port} = config
const {server} = config;

app.get('/', (req, res) => {
  res.json({ message: 'Api is running ...' })
})

app.get('/registration', (req, res) => {
  res.json({
    phone : "", 
    birthdate : "", 
    document : "", 
    name : "", 
    email : "", 
    type : "PJ", 
    password : "", 
   })
})

app.post('/registration', (req, res) => {
  const data = req.body

  // aqui deverá ser adicionado a lógica de validação dos dados e persistência no banco de dados
  // como não foi solicitado isso no desafio, não foi implementado por questão de fidelidade ao enunciado

  res.json({success : true})
})

app.listen(port, () => {
  console.log(`Api listening ${server}:${port}`)
})