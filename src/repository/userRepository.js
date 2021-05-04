const jwt = require('jsonwebtoken');

exports.generateAuthToken = (userId) =>
{
const token = jwt.sign({userId,}, process.env.JWT_SECRET, {expiresIn: "2h"});
return token;
}
// setting the token in cookies.
// res.cookies = ("access_token", token, {
//     maxAge: 10000,
//     httpOnly: true
// })

