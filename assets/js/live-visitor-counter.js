// Referensi ke database
var database = firebase.database();
var visitorsRef = database.ref('visitors');

// Fungsi untuk memperbarui jumlah pengunjung
function updateVisitorCount() {
    visitorsRef.transaction(function (currentValue) {
        return (currentValue || 0) + 1;
    });
}

// Fungsi untuk mengambil statistik pengunjung
function updateVisitorStatistics() {
    var today = new Date().toISOString().slice(0, 10);
    var yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    var startOfWeek = new Date(new Date().setDate(new Date().getDate() - new Date().getDay())).toISOString().slice(0, 10);
    var startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10);

    visitorsRef.once('value', function (snapshot) {
        var visitors = snapshot.val();
        var todayCount = visitors ? visitors[today] || 0 : 0;
        var yesterdayCount = visitors ? visitors[yesterday] || 0 : 0;
        var weekCount = 0;
        var monthCount = 0;
        var totalCount = 0;

        Object.keys(visitors || {}).forEach(function (date) {
            if (date >= startOfWeek) weekCount += visitors[date];
            if (date >= startOfMonth) monthCount += visitors[date];
            totalCount += visitors[date];
        });

        // Update tampilan
        document.getElementById('todayCount').innerText = todayCount;
        document.getElementById('yesterdayCount').innerText = yesterdayCount;
        document.getElementById('weekCount').innerText = weekCount;
        document.getElementById('monthCount').innerText = monthCount;
        document.getElementById('totalCount').innerText = totalCount;
    });
}

// Memperbarui jumlah pengunjung dan statistik saat halaman dimuat
updateVisitorCount();
updateVisitorStatistics();

// Memperbarui jumlah pengunjung setiap kali ada perubahan
visitorsRef.on('value', function (snapshot) {
    updateVisitorStatistics();
    document.getElementById('liveVisitorCount').innerText = snapshot.val() || 0;
});