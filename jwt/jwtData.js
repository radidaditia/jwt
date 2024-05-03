const jwt = require("jsonwebtoken");
const secretKey = "smktibazma";

function createToken(id, nama, kelas, alamat, hobi) {
  const data = { id, nama, kelas, alamat, hobi };
  return jwt.sign(data, secretKey);
}

function verify(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    delete decoded.iat;
    return decoded;
  } catch (err) {
    console.error(err);
  }
}

const siswa = {
  id: 1,
  nama: "Rdd",
  kelas: "SIJA",
  alamat: "lampung selatan",
  hobi: "bermain bola",
};

// membuat token siswa
const token = createToken(
  siswa.id,
  siswa.nama,
  siswa.kelas,
  siswa.alamat,
  siswa.hobi
);
console.log("token: ", token);

// verivikasi token siswa
const decodedSiswa = verify(token);
console.log("decodedSiswa: ", decodedSiswa);
