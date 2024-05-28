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

// Mendapatkan tanggal hari ini
var today = new Date().toISOString().slice(0, 10);
console.log("Today: ", today);

// Mendapatkan tanggal kemarin
var yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
var yesterday = yesterdayDate.toISOString().slice(0, 10);
console.log("Yesterday: ", yesterday);

// Mendapatkan minggu ini (dimulai dari hari Minggu)
var todayObj = new Date();
var thisWeekStart = new Date(todayObj.setDate(todayObj.getDate() - todayObj.getDay()));
thisWeekStart = thisWeekStart.toISOString().slice(0, 10);
console.log("This Week Start: ", thisWeekStart);

// Mendapatkan bulan ini
var thisMonth = new Date().toISOString().slice(0, 7);
console.log("This Month: ", thisMonth);

// Mendapatkan URL saat ini
var currentURL = window.location.href;

// Fungsi untuk memeriksa apakah aplikasi berjalan di mode pengembangan
function isDevelopmentMode() {
  return currentURL.startsWith("http://127.0.0.1:3000/");
}

// Fungsi untuk menambahkan pengunjung aktif
function addActiveVisitor() {
  // Memeriksa apakah aplikasi sedang dalam mode pengembangan
  if (!isDevelopmentMode()) {
    var visitorID = Date.now().toString(); // ID pengunjung berdasarkan waktu saat ini
    var visitorData = {
      timestamp: Date.now(),
      url: currentURL
    };

    activeVisitorsRef.child(visitorID).set(visitorData);
    console.log("Added active visitor:", visitorID);
  } else {
    console.log("Development mode, active visitor not added.");
  }
}

// Fungsi untuk menghapus pengunjung yang tidak aktif setelah jangka waktu tertentu
function removeInactiveVisitors() {
  var thirtyMinutesAgo = Date.now() - (30 * 60 * 1000); // Waktu 30 menit yang lalu
  activeVisitorsRef.orderByChild('timestamp').endAt(thirtyMinutesAgo).once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      childSnapshot.ref.remove();
      console.log("Removed inactive visitor:", childSnapshot.key);
    });
  });
}

// Menambahkan pengunjung aktif saat halaman dimuat
addActiveVisitor();

// Menghapus pengunjung yang tidak aktif setelah jangka waktu tertentu
setInterval(removeInactiveVisitors, 5 * 60 * 1000); // Memeriksa setiap 5 menit

// Memperbarui hitungan pengunjung
function updateVisitorCounts() {
  // Memeriksa apakah aplikasi sedang dalam mode pengembangan
  if (!isDevelopmentMode()) {
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
    console.log("Development mode, visitor count update skipped.");
  }
}

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