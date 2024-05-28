// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyAQqCb4obTgFMozVOg3JqJJ-ZCmdPhITLs",
  authDomain: "rutan-wonosobo-0.firebaseapp.com",
  databaseURL: "https://rutan-wonosobo-0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rutan-wonosobo-0",
  storageBucket: "rutan-wonosobo-0.appspot.com",
  messagingSenderId: "587999781707",
  appId: "1:587999781707:web:7fb68389a77364bb9a7ece",
  measurementId: "G-2ZW152V3VP"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Fungsi untuk mendapatkan tanggal hari ini dalam format YYYY-MM-DD
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Fungsi untuk mencatat kunjungan baru
function recordNewVisit() {
  const todayDate = getTodayDate();
  const visitorCountsRef = database.ref('visitorCounts');

  visitorCountsRef.transaction(function (currentData) {
    if (currentData) {
      currentData.today = (currentData.today || 0) + 1;
      currentData.thisWeek = (currentData.thisWeek || 0) + 1;
      currentData.thisMonth = (currentData.thisMonth || 0) + 1;
      currentData.total = (currentData.total || 0) + 1;
      currentData.lastVisit = todayDate;
    } else {
      currentData = {
        today: 1,
        yesterday: 0,
        thisWeek: 1,
        thisMonth: 1,
        total: 1,
        lastVisit: todayDate
      };
    }
    return currentData;
  });
}

// Fungsi untuk memperbarui tampilan pengunjung secara real-time
function updateVisitorCounts(snapshot) {
  const data = snapshot.val();
  document.getElementById('todayCount').textContent = data.today || 0;
  document.getElementById('yesterdayCount').textContent = data.yesterday || 0;
  document.getElementById('thisWeekCount').textContent = data.thisWeek || 0;
  document.getElementById('thisMonthCount').textContent = data.thisMonth || 0;
  document.getElementById('totalCount').textContent = data.total || 0;
}

// Referensi ke lokasi data pengunjung di Realtime Database
const visitorCountsRef = database.ref('visitorCounts');

// Mendengarkan perubahan data secara real-time
visitorCountsRef.on('value', updateVisitorCounts);

// Cek URL halaman saat ini
const isLocalhost = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';

// Panggil fungsi recordNewVisit() setiap kali halaman dimuat, kecuali di localhost
if (!isLocalhost) {
  recordNewVisit();
}