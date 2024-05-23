// Memanggil fungsi aturDataMarquee() saat dokumen selesai dimuat
window.onload = function() {
    // Menunda penampilan teks di dalam marquee dengan delay 2000 milidetik (2 detik)
    setTimeout(aturDataMarquee, 2000);
};

function aturDataMarquee() {
    // Ambil elemen marquee
    var marquee = document.getElementById('marqueeData');
    
    // Data yang ingin diatur
    var totalWBP = 142;
    var jumlahTahanan = 54;
    var lakiLakiTahanan = 52;
    var perempuanTahanan = 2;
    var jumlahNarapidana = 86;
    var lakiLakiNarapidana = 84;
    var perempuanNarapidana = 2;
    
    // Format teks baru untuk dimasukkan ke dalam marquee
    var newText = `Jumlah Total Warga Binaan Pemasyarakatan ${totalWBP} Orang dengan rincian ${jumlahTahanan} Orang Tahanan (${lakiLakiTahanan} Laki-Laki, ${perempuanTahanan} Perempuan) dan ${jumlahNarapidana} Orang Narapidana (${lakiLakiNarapidana} Laki-Laki, ${perempuanNarapidana} Perempuan).`;
    
    // Mengganti teks di dalam marquee dengan teks baru yang sudah diformat
    marquee.innerText = newText;
}
