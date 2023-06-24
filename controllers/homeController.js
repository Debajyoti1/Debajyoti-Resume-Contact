module.exports.homePage=(req,res)=>{

    return res.status(200).json({
        AppName : 'Debajyoti Dutta Resume Submit Form Handler',
        Server : 'Node Express',
        'Local Port' : process.env.Port,
        'Developed By' : 'Debajyoti Dutta',
        'Remote IP': req.connection.remoteAddress || req.headers['x-forwarded-for'],
        'Remote Port': req.connection.remotePort
    })
}
