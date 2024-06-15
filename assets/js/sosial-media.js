function setSocialMediaLinks() {
    const socialMediaButtons = [
        { id: 'facebookBtn', class: 'text-bg-primary', icon: 'bi-facebook', link: 'https://www.facebook.com/rutanwonosobo/', delay: '300' },
        { id: 'twitterBtn', class: 'text-bg-dark', icon: 'bi-twitter-x', link: 'https://x.com/RutanWonosobo?s=08', delay: '600' },
        { id: 'instagramBtn', class: 'text-bg-danger', icon: 'bi-instagram', link: 'https://www.instagram.com/direct/t/116710499713285', delay: '900' },
        { id: 'websiteBtn', class: 'text-bg-success', icon: 'bi-globe-asia-australia', link: 'https://rutanwonosobo.kemenkumham.go.id/', delay: '1200' }
    ];

    const container = document.getElementById('socialMediaButtons');
    container.className = 'd-flex flex-wrap justify-content-center my-4';

    socialMediaButtons.forEach(button => {
        const a = document.createElement('a');
        a.href = button.link;
        a.target = "_blank";
        a.className = `btn ${button.class} social-btn rounded-circle shadow-sm me-2`;
        a.id = button.id;

        // Tambahkan atribut data-aos dan data-aos-delay pada ikon
        const icon = document.createElement('i');
        icon.className = `bi ${button.icon}`;
        icon.setAttribute('data-aos', 'fade-up');
        icon.setAttribute('data-aos-delay', button.delay);

        a.appendChild(icon);

        container.appendChild(a);
    });

    // Inisialisasi AOS setelah konten dimuat
    AOS.init();
}

// Panggil fungsi untuk mengatur link sosial media
document.addEventListener("DOMContentLoaded", setSocialMediaLinks);