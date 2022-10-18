const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())  

//endpoints

const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller.js')



app.listen(4000, () => {console.log('Server running on 4040')})