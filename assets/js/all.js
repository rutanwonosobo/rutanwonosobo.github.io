$(document).ready(function () {
    // Inisialisasi popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Set lazyload
    $('img').each(function () {
        $(this).attr('loading', 'lazy');
    });
});

document.querySelector('.info-wbp marquee').addEventListener('mouseover', function () {
    this.stop();
});

document.querySelector('.info-wbp marquee').addEventListener('mouseout', function () {
    this.start();
});
$(document).ready(function () {
    $('.modal').on('show.bs.modal', function () {
        $('.modal').not($(this)).modal('hide');
    });
});