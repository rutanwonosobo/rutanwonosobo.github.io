// Inisialisasi Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAQqCb4obTgFMozVOg3JqJJ-ZCmdPhITLs",
  authDomain: "rutan-wonosobo-0.firebaseapp.com",
  projectId: "rutan-wonosobo-0",
  storageBucket: "rutan-wonosobo-0.appspot.com",
  messagingSenderId: "587999781707",
  appId: "1:587999781707:web:7fb68389a77364bb9a7ece",
  measurementId: "G-2ZW152V3VP"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Referensi ke database Firebase
var dbRef = firebase.database().ref('visitor_count');

// Ambil data pengunjung dari Firebase dan tampilkan di HTML
dbRef.once('value').then(function (snapshot) {
  var visitorCounts = snapshot.val();

  document.getElementById('todayCount').textContent = visitorCounts.today;
  document.getElementById('yesterdayCount').textContent = visitorCounts.yesterday;
  document.getElementById('thisWeekCount').textContent = visitorCounts.this_week;
  document.getElementById('thisMonthCount').textContent = visitorCounts.this_month;
  document.getElementById('totalCount').textContent = visitorCounts.total;
});