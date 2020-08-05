const mongoose = require('mongoose')

const db_connection = 'mongodb+srv://admin:admin123@cluster0.fbrmk.mongodb.net/my_database'

const db = () => {
    try {
        mongoose.connect(db_connection, {
            useNewUrlParser: true
        })
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    db,
}