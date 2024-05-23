function updateWaktu() {
    var sekarang = new Date();
    var hari = sekarang.toLocaleDateString('id-ID', { weekday: 'long' });
    var tanggal = sekarang.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    var jam = sekarang.getHours();
    var menit = sekarang.getMinutes();
    var detik = sekarang.getSeconds();

    jam = tambahkanNol(jam);
    menit = tambahkanNol(menit);
    detik = tambahkanNol(detik);

    document.getElementById('waktu').innerHTML = jam + ':' + menit + ':' + detik;
    document.getElementById('tanggal').innerHTML = hari + ', ' + tanggal;
}

function tambahkanNol(waktu) {
    return waktu < 10 ? '0' + waktu : waktu;
}

setInterval(updateWaktu, 1000);

updateWaktu();