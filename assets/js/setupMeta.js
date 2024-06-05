// Membuat meta tags
const metaTags = [
    { name: 'description', content: 'Sistem Layanan Terpadu Rutan Wonosobo adalah sebuah sistem yang mengintegrasikan berbagai layanan publik yang ada di Rutan Wonosobo dalam satu platform. Sistem ini bertujuan untuk memudahkan masyarakat dalam mengakses layanan publik di Rutan Wonosobo, meningkatkan kualitas pelayanan publik, dan mewujudkan transparansi dan akuntabilitas penyelenggaraan layanan publik di Rutan Wonosobo.' },
    { name: 'keywords', content: 'SAYAP TAWON, Sistem Layanan Terpadu, Rutan Wonosobo, layanan publik, transparansi, akuntabilitas' },
    { name: 'robots', content: 'index, follow' }
];

// Menambahkan meta tags ke dalam head
metaTags.forEach(tag => {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('name', tag.name);
    metaTag.setAttribute('content', tag.content);
    document.head.appendChild(metaTag);
});

// Membuat link rel canonical
const canonicalLink = document.createElement('link');
canonicalLink.setAttribute('rel', 'canonical');
canonicalLink.setAttribute('href', 'https://rutanwonosobo.vercel.app/');
document.head.appendChild(canonicalLink);

// Membuat og tags
const ogTags = [
    { property: 'og:title', content: 'SAYAP TAWON - RUTAN WONOSOBO' },
    { property: 'og:description', content: 'Sistem Layanan Terpadu Rutan Wonosobo adalah sebuah sistem yang mengintegrasikan berbagai layanan publik yang ada di Rutan Wonosobo dalam satu platform. Sistem ini bertujuan untuk memudahkan masyarakat dalam mengakses layanan publik di Rutan Wonosobo, meningkatkan kualitas pelayanan publik, dan mewujudkan transparansi dan akuntabilitas penyelenggaraan layanan publik di Rutan Wonosobo.' },
    { property: 'og:image', content: 'https://cdn.jsdelivr.net/gh/rutanwonosobo/rutanwonosobo.github.io@main/assets/img/repo-rutanwonosobo.png' },
    { property: 'og:url', content: 'https://rutanwonosobo.vercel.app/' }
];

// Menambahkan og tags ke dalam head
ogTags.forEach(tag => {
    const ogTag = document.createElement('meta');
    ogTag.setAttribute('property', tag.property);
    ogTag.setAttribute('content', tag.content);
    document.head.appendChild(ogTag);
});

// Membuat favicon
const faviconLink = document.createElement('link');
faviconLink.setAttribute('rel', 'icon');
faviconLink.setAttribute('href', 'https://cdn.jsdelivr.net/gh/rutanwonosobo/rutanwonosobo.github.io@main/assets/img/logorutanwonosobo.png');
faviconLink.setAttribute('type', 'image/png');
faviconLink.setAttribute('sizes', 'any');
document.head.appendChild(faviconLink);