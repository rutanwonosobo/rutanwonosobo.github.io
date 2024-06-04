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

// Fungsi untuk mendapatkan tanggal awal minggu (Senin) dalam format YYYY-MM-DD
function getWeekStartDate() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Minggu) hingga 6 (Sabtu)
  const startDate = new Date(today.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1))); // Senin minggu ini
  const year = startDate.getFullYear();
  const month = String(startDate.getMonth() + 1).padStart(2, '0');
  const day = String(startDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Fungsi untuk mendapatkan bulan ini dalam format YYYY-MM
function getMonthStartDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}-01`;
}

// Fungsi untuk mencatat kunjungan baru
function recordNewVisit() {
  const todayDate = getTodayDate();
  const weekStartDate = getWeekStartDate();
  const monthStartDate = getMonthStartDate();
  const visitorCountsRef = database.ref('visitorCounts');

  visitorCountsRef.transaction(function (currentData) {
    if (currentData) {
      const lastVisit = currentData.lastVisit || todayDate;

      // Reset data harian jika tanggal berbeda
      if (lastVisit !== todayDate) {
        currentData.yesterday = currentData.today || 0;
        currentData.today = 0;
      }

      // Reset data mingguan jika awal minggu berbeda
      if (lastVisit < weekStartDate) {
        currentData.thisWeek = 0;
      }

      // Reset data bulanan jika awal bulan berbeda
      if (lastVisit < monthStartDate) {
        currentData.thisMonth = 0;
      }

      currentData.today += 1;
      currentData.thisWeek += 1;
      currentData.thisMonth += 1;
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
