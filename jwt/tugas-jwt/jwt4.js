const jwt = require("jsonwebtoken");
const secretKey = "smktibazma";

// Fungsi untuk memverifikasi token JWT untuk jadwal kegiatan libur Lebaran
function verifyScheduleToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    console.error("Token tidak valid atau telah kedaluwarsa.");
    return null;
  }
}

const cektoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmF5ZXJUaW1lIjoiMDY6MDAgQU0iLCJtZWFsVGltZSI6IjEyOjAwIFBNIiwiZmFtaWx5VGltZSI6IjA2OjAwIFBNIiwiaWF0IjoxNzE0NjM3ODg5LCJleHAiOjE3MTQ3MjQyODl9.BwvOq0ZKG-BNrDxYsLmTu44OZeaHdKxhhXXjDLyBml4";

// Memverifikasi token jadwal kegiatan
const verifiedScheduleToken = verifyScheduleToken(cektoken);
if (verifiedScheduleToken) {
  console.log("Jadwal Kegiatan yang Terverifikasi: ", verifiedScheduleToken);
} else {
  console.log("Token tidak valid atau telah kedaluwarsa.");
}
