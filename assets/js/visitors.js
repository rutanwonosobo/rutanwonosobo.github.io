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

document.addEventListener("DOMContentLoaded", function () {
  const visitorSection = document.getElementById('visitors');

  const row = document.createElement('div');
  row.className = 'row';
  visitorSection.appendChild(row);

  const col = document.createElement('div');
  col.className = 'col-md-12 text-center my-2';
  row.appendChild(col);

  const card = document.createElement('div');
  card.className = 'card shadow-sm';
  col.appendChild(card);

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header text-center fw-bold text-bg-light';
  cardHeader.innerHTML = '<i class="bi bi-people-fill me-2"></i>Total Visitors';
  card.appendChild(cardHeader);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body p-2 m-0';
  card.appendChild(cardBody);

  const tableResponsive = document.createElement('div');
  tableResponsive.className = 'table-responsive';
  cardBody.appendChild(tableResponsive);

  const table = document.createElement('table');
  table.className = 'table table-borderless m-0';
  tableResponsive.appendChild(table);

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  const rows = [
    { label: 'Hari Ini:', id: 'todayCount' },
    { label: 'Kemarin:', id: 'yesterdayCount' },
    { label: 'Minggu Ini:', id: 'thisWeekCount' },
    { label: 'Bulan Ini:', id: 'thisMonthCount' },
    { label: 'Total:', id: 'totalCount' }
  ];

  rows.forEach(row => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdLabel = document.createElement('td');
    tdLabel.className = 'text-end py-0';
    tdLabel.style.width = '50%';
    tdLabel.textContent = row.label;
    tr.appendChild(tdLabel);

    const tdValue = document.createElement('td');
    tdValue.className = 'text-start py-0';
    tdValue.style.width = '50%';
    const span = document.createElement('span');
    span.id = row.id;
    span.className = 'fw-bold';
    tdValue.appendChild(span);
    tdValue.appendChild(document.createTextNode(' Orang'));
    tr.appendChild(tdValue);
  });
});