function tambahkanNol(waktu) {
    return waktu < 10 ? '0' + waktu : waktu;
}

function updateWaktu() {
    const sekarang = new Date();
    const hari = sekarang.toLocaleDateString('id-ID', { weekday: 'long' });
    const tanggal = sekarang.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    jam = tambahkanNol(jam);
    menit = tambahkanNol(menit);
    detik = tambahkanNol(detik);

    document.getElementById('waktu').innerHTML = jam + ':' + menit + ':' + detik;
    document.getElementById('tanggal').innerHTML = hari + ', ' + tanggal;
}

window.onload = function () {
    // Membuat container clock dan mengatur kelasnya
    const clockContainer = document.getElementById('clockContainer');
    clockContainer.className = 'text-center fw-bold p-3 my-2';
    clockContainer.id = 'clock';

    // Membuat elemen untuk waktu dan tanggal
    const waktuDiv = document.createElement('div');
    waktuDiv.className = 'time';
    waktuDiv.id = 'waktu';

    const tanggalDiv = document.createElement('div');
    tanggalDiv.className = 'date';
    tanggalDiv.id = 'tanggal';

    // Menambahkan elemen waktu dan tanggal ke dalam container clock
    clockContainer.appendChild(waktuDiv);
    clockContainer.appendChild(tanggalDiv);

    // Memperbarui waktu setiap detik
    setInterval(updateWaktu, 1000);
    updateWaktu();
};