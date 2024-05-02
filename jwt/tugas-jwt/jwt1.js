const jwt = require("jsonwebtoken");
const secretKey = "smktibazma";

function createRegistrationToken(fullName, address, contactNumber) {
  const data = { fullName, address, contactNumber };
  // Menambahkan waktu kedaluwarsa 24 jam pada token
  const options = { expiresIn: "24h" };
  return jwt.sign(data, secretKey, options);
}

// Contoh data untuk pendaftaran
const registrationData = {
  fullName: "Rdd",
  address: "Lampung Selatan",
  contactNumber: "081234567890",
};

// Membuat token untuk pendaftaran libur Lebaran
const registrationToken = createRegistrationToken(
  registrationData.fullName,
  registrationData.address,
  registrationData.contactNumber
);
console.log("Token Pendaftaran: ", registrationToken);
