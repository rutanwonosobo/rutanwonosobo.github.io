document.addEventListener('DOMContentLoaded', () => {
    const cardsData = [
        {
            icon: 'bi-people',
            title: 'Kunjungan dan Penitipan Barang',
            link: '../layanan/kunjungan-dan-penitipan-barang.html'
        },
        {
            icon: 'bi-gear',
            title: 'Program Reintegrasi Sosial',
            link: '../layanan/program-reintegrasi-sosial.html'
        },
        {
            icon: 'bi-heart-pulse',
            title: 'Kesehatan',
            link: '../layanan/kesehatan.html'
        },
        {
            icon: 'bi-shield-shaded',
            title: 'Bantuan Hukum',
            link: '../layanan/bantuan-hukum.html'
        },
        {
            icon: 'bi-github',
            title: 'Coming Soon',
            link: '../layanan/'
        }
    ];

    const cardContainer = document.getElementById('card-container');
    cardContainer.className = 'row row-cols-1 row-cols-md-3 g-4 my-5 text-center';

    cardsData.forEach(card => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card h-100 p-4';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header bg-transparent border-0';

        const icon = document.createElement('i');
        icon.className = `bi ${card.icon} text-primary display-3`;

        const title = document.createElement('h5');
        title.className = 'card-title text-uppercase fw-bold my-2';
        title.textContent = card.title;

        cardHeader.appendChild(icon);
        cardHeader.appendChild(title);

        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer bg-transparent border-0';

        const link = document.createElement('a');
        link.href = card.link;
        link.className = 'btn btn-primary w-100 rounded-pill shadow';
        link.textContent = 'Lihat Layanan';

        // Uncomment the following lines to make the links open in a new tab
        // link.target = '_blank';
        // link.rel = 'noopener noreferrer';

        cardFooter.appendChild(link);
        cardDiv.appendChild(cardHeader);
        cardDiv.appendChild(cardFooter);
        colDiv.appendChild(cardDiv);
        cardContainer.appendChild(colDiv);
    });
});