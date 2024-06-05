// Fungsi untuk membuat dan mengatur elemen kontak
function createContactBox(id, iconClass, text, targetModal) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';

    const contactBox = document.createElement('div');
    contactBox.className = 'contact-box w-100 p-3 border border-1 border-secondary-subtle rounded shadow-sm';
    contactBox.setAttribute('data-bs-toggle', 'modal');
    contactBox.setAttribute('data-bs-target', targetModal);

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
    container.appendChild(title);

    const contactRow = document.createElement('div');
    contactRow.className = 'd-flex justify-content-center align-items-center my-2 gap-2';

    contactRow.appendChild(createContactBox('phoneBox', 'bi bi-telephone-fill', 'Telepon', '#phoneModal'));
    contactRow.appendChild(createContactBox('emailBox', 'bi bi-envelope-at-fill text-danger', 'E-mail', '#emailModal'));
    contactRow.appendChild(createContactBox('whatsappBox', 'bi bi-whatsapp text-success', 'WhatsApp', '#whatsappModal'));

    container.appendChild(contactRow);
}

// Panggil fungsi untuk mengatur elemen kontak
document.addEventListener('DOMContentLoaded', setContactUsSection);