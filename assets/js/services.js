const layananData = [
    {
        title: 'Informasi Layanan Kunjungan dan Penitipan Barang',
        content: `<p><strong>Rutan Wonosobo</strong> menyediakan layanan kunjungan dan penitipan barang untuk membantu Anda terhubung dengan orang terkasih yang sedang menjalani masa penahanan. Dukung orang terkasih Anda dengan berkunjung ke <strong>Rutan Wonosobo</strong>. Untuk informasi lebih lengkap mengenai <strong>prosedur, jadwal kunjungan, barang bawaan yang diperbolehkan, dan peraturan yang berlaku</strong> silakan klik tombol di bawah.</p>`,
        link: './layanan/kunjungan-dan-penitipan-barang.html'
    },
    {
        title: 'Informasi Program Reintegrasi Sosial',
        content: `<p><strong>Program Reintegrasi Sosial</strong> adalah upaya <strong>Rutan Wonosobo</strong> untuk mengembalikan narapidana ke tengah-tengah masyarakat melalui pembinaan. Proses ini bertujuan untuk mengatasi kesenjangan antara individu dengan masyarakatnya, memulihkan fungsi sosial mereka, dan membangun kembali hubungan yang harmonis dalam masyarakat.</p>
                  <p><strong>Reintegrasi Sosial</strong> dapat dilakukan melalui <strong>Pembebasan Bersyarat (PB)</strong>, <strong>Cuti Menjelang Bebas (CMB)</strong>, dan <strong>Cuti Bersyarat (CB)</strong>. Selama proses reintegrasi, tanggung jawab pembimbing akan diserahkan kepada pihak <strong>Balai Pemasyarakatan (BAPAS)</strong>. Narapidana akan dibagi menjadi dua kategori, yaitu klien pemasyarakatan dewasa dan klien pemasyarakatan anak. Untuk mengetahui lebih lanjut tentang <strong>Program Reintegrasi Sosial Rutan Wonosobo</strong>, klik tombol di bawah ini.</p>`,
        link: './layanan/program-reintegrasi-sosial.html'
    },
    {
        title: 'Informasi Layanan Kesehatan',
        content: `<p><strong>Layanan Kesehatan</strong> di <strong>Rutan Wonosobo</strong> bertujuan memastikan kesehatan para tahanan terjaga dengan baik. Fasilitas kesehatan di rutan ini mencakup pemeriksaan kesehatan rutin, layanan medis dasar, dan penanganan darurat. <strong>Terdapat tenaga medis profesional</strong>, termasuk <strong>dokter dan perawat</strong>, yang siap memberikan perawatan dan pengobatan kepada para tahanan yang membutuhkan.</p>
                  <p>Selain itu, <strong>Rutan Wonosobo</strong> bekerja sama dengan fasilitas kesehatan eksternal untuk kasus-kasus yang memerlukan perawatan lanjutan atau spesialis. Tujuan utama layanan kesehatan ini adalah menjaga kondisi kesehatan para tahanan agar tetap optimal selama masa tahanan. Untuk informasi lebih lanjut silakan klik tombol di bawah.</p>`,
        link: './layanan/kesehatan.html'
    },
    {
        title: 'Informasi Layanan Bantuan Hukum',
        content: `<p><strong>Rutan Wonosobo</strong> bekerja sama dengan <strong>Lembaga Bantuan Hukum (LBH)</strong> untuk memberikan bantuan hukum kepada narapidana dan tahanan, memungkinkan mereka mendapatkan pendampingan dari ahli hukum selama proses peradilan.</p>
                  <p>Kolaborasi ini bertujuan memastikan akses yang lebih mudah bagi penghuni rutan terhadap layanan hukum, meningkatkan keadilan dalam sistem peradilan bagi semua warga binaan. Untuk informasi lebih lanjut bisa klik tombol di bawah ini.</p>`,
        link: './layanan/bantuan-hukum.html'
    }
];

const container = document.getElementById('accordionPelayananContainer');

const heading = document.createElement('h4');
heading.className = 'fs-5 text-center fw-bold text-uppercase my-4';
heading.innerText = 'Daftar Layanan';
container.appendChild(heading);

const accordionContainer = document.createElement('div');
accordionContainer.id = 'accordionPelayanan';
accordionContainer.className = 'accordion accordion-flush';
container.appendChild(accordionContainer);

layananData.forEach((layanan, index) => {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';

    accordionItem.innerHTML = `
        <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed fw-bold rounded text-bg-success shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                <i class="bi bi-heart-fill text-bg-light text-danger p-2 rounded-circle shadow-sm me-2"></i>
                ${layanan.title}
            </button>
        </h2>
        <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}">
            <div class="accordion-body">
                ${layanan.content}
                <div class="d-flex justify-content-center align-items-center mt-3">
                    <a class="btn btn-primary btn-sm rounded-pill px-4" href="${layanan.link}" role="button">Buka Layanan</a>
                </div>
            </div>
        </div>
    `;

    accordionContainer.appendChild(accordionItem);
});