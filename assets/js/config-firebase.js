// Konfigurasi Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAQqCb4obTgFMozVOg3JqJJ-ZCmdPhITLs",
  authDomain: "rutan-wonosobo-0.firebaseapp.com",
  databaseURL: "https://rutan-wonosobo-0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rutan-wonosobo-0",
  storageBucket: "rutan-wonosobo-0.appspot.com",
  messagingSenderId: "587999781707",
  appId: "1:587999781707:web:7fb68389a77364bb9a7ece",
  measurementId: "G-2ZW152V3VP"
};
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized");

// Referensi ke database Firebase untuk hitungan pengunjung dan pengunjung yang sedang aktif
var dbRef = firebase.database().ref('visitor_count');
var activeVisitorsRef = firebase.database().ref('active_visitors');

// Mendapatkan URL saat ini
var currentURL = window.location.href;

// Fungsi untuk memeriksa apakah aplikasi berjalan di mode pengembangan
function isDevelopmentMode() {
  return currentURL.startsWith("http://127.0.0.1:3000/");
}

// Fungsi untuk memeriksa apakah pengunjung sudah pernah terhitung sebelumnya dalam sesi ini
function isVisitorCounted() {
  var visitorID = sessionStorage.getItem('visitorID');
  return visitorID !== null;
}

// Fungsi untuk menambahkan pengunjung aktif jika belum terhitung dalam sesi ini
function addActiveVisitor() {
  if (!isDevelopmentMode()) {
    var visitorID = sessionStorage.getItem('visitorID');
    if (!visitorID) {
      visitorID = Date.now().toString(); // ID pengunjung berdasarkan waktu saat ini
      var visitorData = {
        timestamp: Date.now(),
        url: currentURL
      };

      activeVisitorsRef.child(visitorID).set(visitorData);
      console.log("Added active visitor:", visitorID);

      // Simpan informasi pengunjung dalam sesi menggunakan sessionStorage
      sessionStorage.setItem('visitorID', visitorID);
    } else {
      console.log("Visitor already counted in this session, active visitor not added.");
    }
  } else {
    console.log("Development mode, active visitor not added.");
  }
}

// Memanggil fungsi untuk menambahkan pengunjung aktif saat halaman dimuat
addActiveVisitor();

// Fungsi untuk membersihkan sessionStorage saat sesi berakhir
function clearSessionStorage() {
  sessionStorage.removeItem('visitorID');
  console.log("Session storage cleared.");
}

// Memanggil fungsi untuk membersihkan sessionStorage saat jendela/browser ditutup
window.addEventListener('beforeunload', clearSessionStorage);

// Memperbarui hitungan pengunjung
function updateVisitorCounts() {
  if (!isDevelopmentMode() && !isVisitorCounted()) {
    dbRef.transaction(function (currentData) {
      if (currentData === null) {
        return {
          today: 1,
          yesterday: 0,
          this_week: 1,
          this_month: 1,
          total: 1,
          last_updated: today
        };
      } else {
        let updates = {
          today: (currentData.last_updated === today) ? currentData.today + 1 : 1,
          yesterday: (currentData.last_updated === yesterday) ? currentData.yesterday : currentData.today,
          this_week: (currentData.last_updated >= thisWeekStart) ? currentData.this_week + 1 : 1,
          this_month: (currentData.last_updated.slice(0, 7) === thisMonth) ? currentData.this_month + 1 : 1,
          total: currentData.total + 1,
          last_updated: today
        };
        console.log("Updates: ", updates);
        return updates;
      }
    }).then(function (result) {
      console.log("Transaction result: ", result);
    }).catch(function (error) {
      console.error("Transaction failed: ", error);
    });
  } else {
    console.log("Development mode or visitor already counted in this session, visitor count update skipped.");
  }
}

// Mendapatkan tanggal hari ini dengan offset waktu Jakarta
var today = new Date(new Date().getTime() + (7 * 60 * 60 * 1000)).toISOString().slice(0, 10);
console.log("Today: ", today);

// Mendapatkan tanggal kemarin dengan offset waktu Jakarta
var yesterdayDate = new Date(new Date().getTime() + (7 * 60 * 60 * 1000));
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
var yesterday = yesterdayDate.toISOString().slice(0, 10);
console.log("Yesterday: ", yesterday);

// Mendapatkan tanggal ini minggu (dimulai dari hari Minggu) dengan offset waktu Jakarta
var todayObj = new Date(new Date().getTime() + (7 * 60 * 60 * 1000));
var thisWeekStart = new Date(todayObj.setDate(todayObj.getDate() - todayObj.getDay()));
thisWeekStart = thisWeekStart.toISOString().slice(0, 10);
console.log("This Week Start: ", thisWeekStart);

// Mendapatkan bulan ini dengan offset waktu Jakarta
var thisMonth = new Date(new Date().getTime() + (7 * 60 * 60 * 1000)).toISOString().slice(0, 7);
console.log("This Month: ", thisMonth);

// Memperbarui hitungan pengunjung
updateVisitorCounts();

// Menampilkan hitungan pengunjung di halaman
dbRef.on('value', function (snapshot) {
  var visitorCounts = snapshot.val();
  if (visitorCounts) {
    console.log("Visitor Counts: ", visitorCounts);
    document.getElementById('todayCount').textContent = visitorCounts.today || 0;
    document.getElementById('yesterdayCount').textContent = visitorCounts.yesterday || 0;
    document.getElementById('thisWeekCount').textContent = visitorCounts.this_week || 0;
    document.getElementById('thisMonthCount').textContent = visitorCounts.this_month || 0;
    document.getElementById('totalCount').textContent = visitorCounts.total || 0;
  }
});

// Menampilkan jumlah pengunjung aktif di halaman
activeVisitorsRef.on('value', function (snapshot) {
  var numActiveVisitors = snapshot.numChildren();
  console.log("Active Visitors:", numActiveVisitors);
  document.getElementById('activeVisitorsCount').textContent = numActiveVisitors;
});
