document.addEventListener("DOMContentLoaded", function () {
    const infoBoard = document.getElementById('info-board');

    const card = createElement('div', { class: 'card shadow-sm' }, infoBoard);
    const cardHeader = createElement('div', { class: 'card-header text-center fw-bold bg-primary text-white' }, card);
    cardHeader.innerHTML = '<i class="bi bi-bell-fill me-2"></i>Papan Informasi Layanan';

    const cardBody = createElement('div', { class: 'card-body' }, card);
    const row = createElement('div', { class: 'row' }, cardBody);

    // Kolom Pertama
    createColumn(row, 'bi-clock-fill', 'Jam Layanan', [
        { title: 'Senin - Kamis:', items: ['08.00 - 11.00 WIB (PAGI)', '13.00 - 14.00 WIB (SIANG)'] },
        { title: 'Jum\'at & Sabtu:', items: ['08.30 - 11.00 WIB'] }
    ]);

    // Kolom Kedua
    createColumn(row, 'bi-calendar-fill', 'Hari Kunjungan', [
        { title: 'Selasa & Kamis:', items: ['Tahanan'] },
        { title: 'Senin & Rabu:', items: ['Narapidana'] },
        { title: 'Jum\'at & Sabtu:', items: ['Khusus Napi Narkotika'] }
    ]);
});

function createElement(tag, attributes, parent) {
    const element = document.createElement(tag);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}

function createColumn(parent, iconClass, headerText, rows) {
    const col = createElement('div', { class: 'col-md-6' }, parent);
    const tableWrapper = createElement('div', { class: 'table-wrapper justify-content-center align-items-center' }, col);
    const table = createElement('table', { class: 'table table-bordered' }, tableWrapper);

    const thead = createElement('thead', { class: 'table-light' }, table);
    const trHead = createElement('tr', {}, thead);
    const thHead = createElement('th', { class: 'text-center', scope: 'col' }, trHead);
    thHead.innerHTML = `<i class="bi ${iconClass} me-2"></i>${headerText}`;

    const tbody = createElement('tbody', {}, table);
    const trBody = createElement('tr', {}, tbody);
    const tdBody = createElement('td', { class: 'text-center py-4' }, trBody);
    const ul = createElement('ul', { class: 'list-unstyled mb-0' }, tdBody);

    rows.forEach(row => {
        const liTitle = createElement('li', { class: 'fw-bold py-0' }, ul);
        liTitle.textContent = row.title;
        row.items.forEach(item => {
            const liItem = createElement('li', { class: 'py-0' }, ul);
            liItem.textContent = item;
        });
        createElement('li', { class: 'fw-bold mt-2' }, ul);
    });
}