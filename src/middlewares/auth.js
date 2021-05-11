const jwt = require("jsonwebtoken");

/**
 * 
 * @param { token } req 
 * @param { status } res 
 * @param { if there is a token } next 
 * @returns 
 */
const auth = (req, res, next) => {

    const token = req.header("x-auth-token").split(' ')[1];
    // this will check if there is a token on the api or not

    if (!token) return res.status(401).json({ success: false, data: {message: "Invalid access"} });

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ success: false, data: {message: "This token is not valid"} });
    }
}

module.exports = {
    auth: auth,
    validate: validate
};
