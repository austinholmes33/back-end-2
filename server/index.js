const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())  

//endpoints

const {getAllHouses, createHouse, updateHouse, deleteHouse} = require('./controller.js')

app.get('/api/houses', getAllHouses)
app.delete('/api/houses/:id', deleteHouse)
app.put('/api/houses/:id', updateHouse)
app.post('/api/houses', createHouse)

app.listen(4004, () => {console.log('Server running on 4004')})