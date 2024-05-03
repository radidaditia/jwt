const jwt = require("jsonwebtoken");
const secretKey = "smktibazma";

function verifyRegistrationToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    console.error("Token tidak valid atau telah kedaluwarsa.");
    return null;
  }
}

const cekToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IlJkZCIsImFkZHJlc3MiOiJMYW1wdW5nIFNlbGF0YW4iLCJjb250YWN0TnVtYmVyIjoiMDgxMjM0NTY3ODkwIiwiaWF0IjoxNzE0NjM3NzQwLCJleHAiOjE3MTQ3MjQxNDB9.tSMTdBNBofFEA2y0KjKyR_QlAf01jg89AD5Al2w_10E";

// Memverifikasi token pendaftaran
const verifiedRegistrationToken = verifyRegistrationToken(cekToken);
if (verifiedRegistrationToken) {
  console.log(
    "Data Pendaftaran yang Terverifikasi: ",
    verifiedRegistrationToken
  );
} else {
  console.log("Token tidak valid atau telah kedaluwarsa.");
}
