document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.menu-button, .breadcrumb-button');
    const currentLocation = window.location.href;

    buttons.forEach(button => {
        button.setAttribute('rel', 'noreferrer noopener');
        if (button.href === currentLocation) {
            button.classList.add('active');
        }
    });
})