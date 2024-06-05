// Data yang ingin diatur
var totalWBP = 141;
var jumlahTahanan = 57;
var lakiLakiTahanan = 55;
var perempuanTahanan = 2;
var jumlahNarapidana = 84;
var lakiLakiNarapidana = 82;
var perempuanNarapidana = 2;

// Membuat teks dengan data yang diatur
var newText = `Jumlah Total Warga Binaan Pemasyarakatan ${totalWBP} Orang dengan rincian ${jumlahTahanan} Orang Tahanan (${lakiLakiTahanan} Laki-Laki, ${perempuanTahanan} Perempuan) dan ${jumlahNarapidana} Orang Narapidana (${lakiLakiNarapidana} Laki-Laki, ${perempuanNarapidana} Perempuan).`;

// Menampilkan teks dalam elemen dengan id "marqueeText"
document.getElementById("marqueeText").textContent = newText;