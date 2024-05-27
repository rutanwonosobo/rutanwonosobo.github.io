// Fungsi untuk mengatur link dan target dari setiap ikon media sosial
function setSocialMediaLinks() {
    const facebookLink = "https://www.facebook.com/rutanwonosobo/";
    const twitterLink = "https://x.com/RutanWonosobo?s=08";
    const instagramLink = "https://www.instagram.com/direct/t/116710499713285";
    const websiteLink = "https://rutanwonosobo.kemenkumham.go.id/";

    document.getElementById('facebookBtn').href = facebookLink;
    document.getElementById('twitterBtn').href = twitterLink;
    document.getElementById('instagramBtn').href = instagramLink;
    document.getElementById('websiteBtn').href = websiteLink;

    // Buka link dalam tab atau jendela baru
    const socialButtons = document.getElementById('socialMediaButtons').querySelectorAll('a');
    socialButtons.forEach(button => {
        button.target = "_blank";
    });
}

// Panggil fungsi untuk mengatur link sosial media
setSocialMediaLinks();