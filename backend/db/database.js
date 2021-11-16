const mongoose = require('mongoose')
const connectToDb = async () => {
    return await mongoose.connect('mongodb://localhost/store')
    .then(() => {
        console.log('connected to mongoose')
    })
    .then((err) => {
        console.log(err)
    })
}

module.exports = connectToDb