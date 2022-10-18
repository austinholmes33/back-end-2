const houses = require('./db.json')
const upcoming = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        const deleteId = req.params.id
        let index = houses.findIndex(element => element.id === +deleteId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const updateId = req.params.id
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            id: upcoming,
            address,
            price,
            imageURL,
        }
        houses.push(newHouse)
        res.status(200).send(houses)
    }, 
    
}