const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    },
    ip :{
        type : String
    },
    header : {
        type : Object
    }
}, {
    timestamps: true
})
const Message = mongoose.model('Message', messageSchema)

module.exports = Message