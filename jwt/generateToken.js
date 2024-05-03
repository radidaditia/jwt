const jwt = require("jsonwebtoken");

const secretKey = "SmkTiBazma";
const payload = { userId: 1234, username: "rdd", kelas: "XI" };
const generateToken = jwt.sign(payload, secretKey);
console.log(generateToken);
