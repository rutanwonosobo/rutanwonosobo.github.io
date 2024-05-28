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

// Referensi ke database Firebase
var dbRef = firebase.database().ref('visitor_count');
dbRef.once('value').then(function (snapshot) {
  console.log("Connected to Firebase, snapshot: ", snapshot.val());
});

// Mendapatkan tanggal hari ini
var today = new Date().toISOString().slice(0, 10);
console.log("Today: ", today);

// Mendapatkan tanggal kemarin
var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
yesterday = yesterday.toISOString().slice(0, 10);
console.log("Yesterday: ", yesterday);

// Mendapatkan minggu ini (dimulai dari hari Minggu)
var todayObj = new Date();
var thisWeekStart = new Date(todayObj.setDate(todayObj.getDate() - todayObj.getDay()));
thisWeekStart = thisWeekStart.toISOString().slice(0, 10);
console.log("This Week Start: ", thisWeekStart);

// Mendapatkan bulan ini
var thisMonth = new Date().toISOString().slice(0, 7);
console.log("This Month: ", thisMonth);

// Fungsi untuk memperbarui hitungan pengunjung
function updateVisitorCounts() {
  dbRef.transaction(function (currentData) {
    console.log("Current Data: ", currentData);
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