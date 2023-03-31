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
    type : "PF", 
    password : "", 
   })
})

app.post('/registration', (req, res) => {
  const data = req.body
  //send data to database
  res.json({success : true})
})

app.listen(port, () => {
  console.log(`Api listening ${server}:${port}`)
})