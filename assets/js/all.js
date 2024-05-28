$(document).ready(function() {
    // Inisialisasi popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Set lazyload
    $('img').each(function() {
        $(this).attr('loading', 'lazy');
    });
});

document.querySelector('.info-penghuni marquee').addEventListener('mouseover', function() {
    this.stop();
});

document.querySelector('.info-penghuni marquee').addEventListener('mouseout', function() {
    this.start();
});
$(document).ready(function() {
    $('.modal').on('show.bs.modal', function() {
        $('.modal').not($(this)).modal('hide');
    });
});
// Mendapatkan tinggi maksimum dari kedua tbody
window.addEventListener('load', function() {
    var tbody1Height = document.querySelector('.col-md-6:nth-child(1) tbody').offsetHeight;
    var tbody2Height = document.querySelector('.col-md-6:nth-child(2) tbody').offsetHeight;
    var maxTbodyHeight = Math.max(tbody1Height, tbody2Height);

    // Set tinggi semua tbody menjadi tinggi maksimum
    document.querySelectorAll('.table-wrapper tbody').forEach(function(tbody) {
        tbody.style.height = maxTbodyHeight + 'px';
    });
});