// Fungsi untuk mengatur link dan target dari setiap ikon media sosial
function setSocialMediaLinks() {
    const socialMediaButtons = [
        { id: 'facebookBtn', class: 'text-bg-primary', icon: 'bi-facebook', link: 'https://www.facebook.com/rutanwonosobo/' },
        { id: 'twitterBtn', class: 'text-bg-dark', icon: 'bi-twitter-x', link: 'https://x.com/RutanWonosobo?s=08' },
        { id: 'instagramBtn', class: 'text-bg-danger', icon: 'bi-instagram', link: 'https://www.instagram.com/direct/t/116710499713285' },
        { id: 'websiteBtn', class: 'text-bg-success', icon: 'bi-globe-asia-australia', link: 'https://rutanwonosobo.kemenkumham.go.id/' }
    ];

    const container = document.getElementById('socialMediaButtons');
    container.className = 'd-flex flex-wrap justify-content-center my-4';

    socialMediaButtons.forEach(button => {
        const a = document.createElement('a');
        a.href = button.link;
        a.target = "_blank";
        a.className = `btn ${button.class} social-btn rounded-circle shadow-sm me-2`;
        a.id = button.id;

        const icon = document.createElement('i');
        icon.className = `bi ${button.icon}`;
        a.appendChild(icon);

        container.appendChild(a);
    });
}

// Panggil fungsi untuk mengatur link sosial media
document.addEventListener("DOMContentLoaded", setSocialMediaLinks);