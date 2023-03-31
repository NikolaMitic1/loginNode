const Register = require('../models/register');


const createUser = async (req, res) => {
    try {
        const register = await Register.create(req.body);
        res.status(201).json({register});
    } catch (error) {
        res.status(500).json({msg : error});
    }
}

module.exports = createUser;