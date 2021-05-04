const jwt = require('jsonwebtoken');
const {User} = require('../db/models/index').sequelize.models;
const auth = async (req, res, next) => {
try {
const token = req.cookies.access_token;
const decoded = jwt.verify(token, process.env.JWT_SECRET);
const user = await User.findByPK({userId : decoded.userId});
if (!user) {
    throw new Error();
}
req.user = user;
res.token = token;
next();
} catch (error) {
    res.status(401).send("Please authenticate");
    console.log(error);
}
}
module.exports = auth;