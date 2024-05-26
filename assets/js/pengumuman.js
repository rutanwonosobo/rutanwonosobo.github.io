// Script di pengumuman.js

// Fungsi untuk mengatur konten pengumuman
function dapatkanIsiPengumuman() {
    // Judul pengumuman
    var judulPengumuman = "Pengumuman";

    // URL gambar pengumuman (jika ingin menambahkan gambar)
    var urlGambarPengumuman = "https://www.shutterstock.com/shutterstock/photos/1949944333/display_1500/stock-vector-megaphone-with-important-announcement-vector-flat-1949944333.jpg";

    // Isi pengumuman dalam format HTML
    var htmlTambahan = `
      <p class="font-monospace">https://rutanwonosobo.vercel.app/</p>
    `;

    // Menyiapkan variabel untuk konten pengumuman
    var isiPengumuman = "";

    // Menambahkan gambar pengumuman jika URL tidak kosong
    if (urlGambarPengumuman.trim() !== "") {
        isiPengumuman += `<img src="${urlGambarPengumuman}" class="shadow-sm rounded border my-2" alt="Pengumuman" style="width: 100%; height: auto;">`;
    }

    // Menambahkan konten HTML tambahan jika tidak kosong
    if (htmlTambahan.trim() !== "") {
        isiPengumuman += htmlTambahan;
    }

    return {
        judul: judulPengumuman,
        isi: isiPengumuman
    };
}

// Fungsi untuk menampilkan modal ketika tombol diklik
function tampilkanModal() {
    var modal = document.getElementById('modalPengumuman');
    var modalTitle = modal.querySelector('.modal-title');
    var modalBody = modal.querySelector('.modal-body');

    // Mengambil konten pengumuman
    var pengumuman = dapatkanIsiPengumuman();

    // Mengatur judul modal
    modalTitle.innerHTML = '<i class="bi bi-bell-fill"></i> ' + pengumuman.judul;

    // Menampilkan isi modal jika ada konten, atau menampilkan pesan jika tidak ada konten
    modalBody.innerHTML = pengumuman.isi.trim() !== "" ? pengumuman.isi : "<p>Konten tidak tersedia.</p>";

    // Menampilkan modal
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

// Muat saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Menambahkan animasi bounce ke tombol notifikasi dengan delay jika ada isi pada pengumuman saat halaman dimuat
    var notifikasiButton = document.querySelector('.pengumuman button');
    var pengumuman = dapatkanIsiPengumuman();
    if (pengumuman.isi.trim() !== "") {
        notifikasiButton.classList.add('animate__animated', 'animate__bounce', 'animate__delay-1s', 'animate__slower', 'animate__repeat-3');
    }

    // Menghentikan animasi saat kursor mengarah ke tombol notifikasi
    notifikasiButton.addEventListener('mouseenter', function () {
        notifikasiButton.classList.remove('animate__bounce');
    });

    // Mengembalikan animasi setelah beberapa detik saat kursor meninggalkan tombol notifikasi
    notifikasiButton.addEventListener('mouseleave', function () {
        var pengumuman = dapatkanIsiPengumuman();
        if (pengumuman.isi.trim() !== "") {
            notifikasiButton.classList.add('animate__bounce');
        }
    });

    // Memperbarui badge pengumuman saat halaman dimuat
    perbaruiBadgePengumuman();
});

// Fungsi untuk memperbarui badge berdasarkan konten pengumuman
function perbaruiBadgePengumuman() {
    var badge = document.getElementById('badgePengumuman');
    var pengumuman = dapatkanIsiPengumuman();

    // Menampilkan atau menyembunyikan badge berdasarkan konten pengumuman
    if (pengumuman.isi.trim() !== "") {
        badge.classList.remove('d-none');
    } else {
        badge.classList.add('d-none');
    }
}

// Event listener untuk tombol notifikasi
document.addEventListener('DOMContentLoaded', function () {
    var notifikasiButton = document.querySelector('.pengumuman button');
    notifikasiButton.addEventListener('click', function () {
        // Pastikan modal ditutup sebelum menampilkan yang baru
        var modalElement = document.getElementById('modalPengumuman');
        if ($(modalElement).hasClass('show')) {
            var modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
        }

        // Tampilkan modal
        tampilkanModal();
    });
});