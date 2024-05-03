const jwt = require("jsonwebtoken");
const secretKey = "SmkTiBazma";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMzQsInVzZXJuYW1lIjoicmRkIiwia2VsYXMiOiJYSSIsImlhdCI6MTcxNDYzMzA4NX0.KNyDSy6ZdricGFJc6QWHK48goBzsdGggmIXT5Zlyzq0";
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) console.error(err);
  else console.log("token is valid");
  console.log(decoded);
});
