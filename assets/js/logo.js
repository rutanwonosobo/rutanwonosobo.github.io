// Menunggu sampai seluruh konten HTML dimuat dan siap untuk dimanipulasi
document.addEventListener('DOMContentLoaded', (event) => {
    // URL gambar baru
    var urlGambarBaru = "https://cdn.jsdelivr.net/gh/rutanwonosobo/rutanwonosobo.github.io@main/assets/img/logorutanwonosobo.png";

    // Membuat elemen gambar baru
    var imgElement = document.createElement('img');
    imgElement.src = urlGambarBaru;
    imgElement.alt = "Logo Rutan Wonosobo";
    imgElement.className = "profile img-fluid rounded-circle border border-4 border-white shadow";

    // Menambahkan elemen gambar ke dalam div dengan id "hero-section"
    var heroSection = document.getElementById('hero-section');
    heroSection.appendChild(imgElement);
});