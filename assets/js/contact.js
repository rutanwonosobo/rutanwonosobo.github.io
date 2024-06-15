function createContactBox(id, iconClass, text, targetModal, delay) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';

    const contactBox = document.createElement('div');
    contactBox.className = 'contact-box w-100 p-3 border border-1 border-secondary-subtle rounded shadow-sm';
    contactBox.setAttribute('data-bs-toggle', 'modal');
    contactBox.setAttribute('data-bs-target', targetModal);

    // Tambahkan atribut data-aos dan data-aos-delay
    contactBox.setAttribute('data-aos', 'fade-up');
    contactBox.setAttribute('data-aos-delay', delay);

    const icon = document.createElement('i');
    icon.className = `${iconClass} mb-2`;

    const heading = document.createElement('h5');
    heading.className = 'text-secondary mt-2';
    heading.textContent = text;

    contactBox.appendChild(icon);
    contactBox.appendChild(heading);
    colDiv.appendChild(contactBox);

    return colDiv;
}

// Fungsi untuk mengatur elemen kontak dalam container
function setContactUsSection() {
    const container = document.getElementById('contactContainer');
    container.className = 'contact-container text-center align-items-stretch';

    const title = document.createElement('h4');
    title.className = 'fs-5 fw-bold text-uppercase my-4';
    title.textContent = 'Hubungi Kami';
    title.setAttribute('data-aos', 'fade-down');
    title.setAttribute('data-aos-delay', '300');
    container.appendChild(title);

    const contactRow = document.createElement('div');
    contactRow.className = 'd-flex justify-content-center align-items-center my-2 gap-2';

    // Tambahkan contactBox dengan delay yang berbeda
    contactRow.appendChild(createContactBox('phoneBox', 'bi bi-telephone-fill', 'Telepon', '#phoneModal', '300'));
    contactRow.appendChild(createContactBox('emailBox', 'bi bi-envelope-at-fill text-danger', 'E-mail', '#emailModal', '600'));
    contactRow.appendChild(createContactBox('whatsappBox', 'bi bi-whatsapp text-success', 'WhatsApp', '#whatsappModal', '900'));

    container.appendChild(contactRow);
}

// Panggil fungsi untuk mengatur elemen kontak
document.addEventListener('DOMContentLoaded', setContactUsSection);