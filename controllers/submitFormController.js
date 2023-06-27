const Message = require('../models/message')

module.exports.formSubmit = async (req, res) => {
    try {
        if (req.method != 'POST') {
            throw new Error('Metod Not Allowed')
        }
        const { name, email, message } = req.body
        const ip =  req.headers['x-real-ip'] || req.connection.remoteAddress
        const header = req.headers
        let msg = await Message.create({
            name: name,
            email: email,
            message: message,
            ip: ip,
            header: header
        })
        return res.status(200).json(msg)
    } catch (err) {
        return res.status(500).json({ err:err.message })
    }
}