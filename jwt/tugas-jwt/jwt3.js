const jwt = require("jsonwebtoken");
const secretKey = "smktibazma";

function createScheduleToken(prayerTime, mealTime, familyTime) {
  const data = { prayerTime, mealTime, familyTime };
  // Menambahkan waktu kedaluwarsa 24 jam pada token
  const options = { expiresIn: "24h" };
  return jwt.sign(data, secretKey, options);
}

// Contoh data untuk jadwal kegiatan
const scheduleData = {
  prayerTime: "06:00 AM",
  mealTime: "12:00 PM",
  familyTime: "06:00 PM",
};

// Membuat token untuk jadwal kegiatan libur Lebaran
const scheduleToken = createScheduleToken(
  scheduleData.prayerTime,
  scheduleData.mealTime,
  scheduleData.familyTime
);
console.log("Token Jadwal Kegiatan: ", scheduleToken);
