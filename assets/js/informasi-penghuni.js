// Memanggil fungsi aturDataMarquee() saat dokumen selesai dimuat
window.onload = function () {
    // Memeriksa apakah elemen dengan id marqueeData sudah tersedia
    if(document.getElementById('marqueeData')) {
        // Menunda penampilan teks di dalam marquee dengan delay 2000 milidetik (2 detik)
        setTimeout(aturDataMarquee, 2000);
    } else {
        console.error("Elemen dengan id 'marqueeData' tidak ditemukan.");
    }
};

function aturDataMarquee() {
    // Ambil elemen marquee
    var marquee = document.getElementById('marqueeData');

    // Data yang ingin diatur
    var totalWBP = 146;
    var jumlahTahanan = 62;
    var lakiLakiTahanan = 60;
    var perempuanTahanan = 2;
    var jumlahNarapidana = 84;
    var lakiLakiNarapidana = 82;
    var perempuanNarapidana = 2;

    // Format teks baru untuk dimasukkan ke dalam marquee
    var newText = `Jumlah Total Warga Binaan Pemasyarakatan ${totalWBP} Orang dengan rincian ${jumlahTahanan} Orang Tahanan (${lakiLakiTahanan} Laki-Laki, ${perempuanTahanan} Perempuan) dan ${jumlahNarapidana} Orang Narapidana (${lakiLakiNarapidana} Laki-Laki, ${perempuanNarapidana} Perempuan).`;

    // Mengganti teks di dalam marquee dengan teks baru yang sudah diformat
    if(marquee) {
        marquee.innerText = newText;
    } else {
        console.error("Elemen dengan id 'marqueeData' tidak ditemukan.");
    }
};