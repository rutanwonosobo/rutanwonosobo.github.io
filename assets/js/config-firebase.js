// Konfigurasi Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAQqCb4obTgFMozVOg3JqJJ-ZCmdPhITLs",
  authDomain: "rutan-wonosobo-0.firebaseapp.com",
  projectId: "rutan-wonosobo-0",
  storageBucket: "rutan-wonosobo-0.appspot.com",
  messagingSenderId: "587999781707",
  appId: "1:587999781707:web:7fb68389a77364bb9a7ece",
  measurementId: "G-2ZW152V3VP"
};
// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
// Referensi ke Firebase Database
var database = firebase.database();
var visitorsRef = database.ref('visitors');

// Fungsi untuk menambahkan pengunjung
function addVisitor() {
  var today = new Date().toISOString().slice(0, 10);
  var path = 'statistics/' + today;
  visitorsRef.child(path).transaction(function (currentValue) {
    return (currentValue || 0) + 1;
  });
}

// Fungsi untuk menampilkan statistik pengunjung
function displayVisitorStats() {
  var totalRef = visitorsRef.child('total');
  totalRef.on('value', function (snapshot) {
    var totalVisitors = snapshot.val() || 0;
    document.getElementById('totalVisitors').textContent = totalVisitors;
  });
}

// Panggil fungsi ini saat halaman dimuat
window.onload = function () {
  addVisitor();
  displayVisitorStats();
};