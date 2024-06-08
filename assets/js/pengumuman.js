document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var startDate = new Date("2024-06-01"); // Ganti dengan tanggal mulai pengumuman
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
                pengumumanImage.src = 'https://placehold.co/1200x628/005C78/F3F7EC?text=Humas+Rutan+Wonosobo';
                pengumumanImage.style.display = 'block';

                // Isi teks
                document.getElementById('pengumumanText').innerText = 'Ini adalah pesan pengumuman penting.';

                // Isi HTML
                document.getElementById('pengumumanHtml').innerHTML = 'Untuk informasi lebih lanjut, kunjungi <a href="https://www.example.com" target="_blank">link ini</a>.';

                pengumumanModal.show();
            }, 3000); // 3000 milidetik = 3 detik
        }
    }
});