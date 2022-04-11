const Encryption = require('../encryption');

//desc Handle Checkout Logic
//Route POST /api/v1/checkout
//Access Public 
const Checkout = async (req, res) => {
    const accessKey = process.env.ACCESS_KEY 
    const IVKey = process.env.IV_KEY;
    const secretKey = process.env.SECRET_KEY;
    const algorithm = "aes-256-cbc";

    // get the request body
    const requestBody = req.body;
    
    let encryption = new Encryption(IVKey, secretKey, algorithm)

    const payload = JSON
        .stringify(requestBody)
        .replace(/\//g, '\\/');

    // return a JSON response
    console.log(`https://developer.tingg.africa/checkout/v2/express/?params=${encryption.encrypt(payload)}&accessKey=${accessKey}&countryCode=${requestBody.countryCode}`)
    res.json({
        params: encryption.encrypt(payload),
        accessKey,
        countryCode: requestBody.countryCode
    });
}

const Success = async (req, res) => {
    console.log(req.body)
}

const Pending = async (req, res) => {
    console.log(req.body)
}

const Failed = async(req, res) => {
    console.log(req.body)
}


module.exports = {
    Checkout,
    Success,
    Pending,
    Failed
}