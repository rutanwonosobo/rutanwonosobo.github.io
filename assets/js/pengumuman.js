document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var startDate = new Date("2024-06-15"); // Ganti dengan tanggal mulai pengumuman
    var endDate = new Date("2024-06-30"); // Ganti dengan tanggal akhir pengumuman
    var showModal = false; // Ganti dengan true atau false untuk mengontrol tampilan modal

    if (showModal) {
        if (today >= startDate && today <= endDate) {
            // Menampilkan modal setelah 3 detik
            setTimeout(function () {
                var pengumumanModal = new bootstrap.Modal(document.getElementById('pengumumanModal'));

                // Isi modal
                document.getElementById('pengumumanLabel').innerHTML = '<i class="bi bi-bell-fill"></i> Pengumuman';

                // Isi gambar
                var pengumumanImage = document.getElementById('pengumumanImage');
                pengumumanImage.src = 'https://cdn.jsdelivr.net/gh/rutanwonosobo/rutanwonosobo.github.io@main/assets/img/casn-kemenkumham-2024.webp';
                pengumumanImage.style.display = 'block';

                // Isi teks
                document.getElementById('pengumumanText').innerText = '';

                // Isi HTML
                document.getElementById('pengumumanHtml').innerHTML = 'Untuk informasi lebih lanjut, kunjungi <a href="https://www.instagram.com/p/C8EZy4IPDU3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">link ini</a>.';

                pengumumanModal.show();
            }, 5000);
        }
    }
});