document.addEventListener('DOMContentLoaded', function() {
    var locationContainer = document.getElementById('locationContainer');
    
    // Create Button
    var toggleButton = document.createElement('button');
    toggleButton.id = 'toggleButton';
    toggleButton.className = 'btn btn-primary';
    toggleButton.type = 'button';
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#collapseLocation');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-controls', 'collapseLocation');
    toggleButton.innerHTML = '<i class="bi bi-geo-alt-fill me-2"></i>Lokasi Rutan Wonosobo';
    
    // Create Collapse Container
    var collapseContainer = document.createElement('div');
    collapseContainer.className = 'collapse mt-4';
    collapseContainer.id = 'collapseLocation';
    
    // Create Card
    var card = document.createElement('div');
    card.className = 'card card-body text-center';
    
    // Create Responsive Maps Container
    var responsiveMaps = document.createElement('div');
    responsiveMaps.className = 'responsive-maps my-2';
    
    // Create Iframe
    var mapFrame = document.createElement('iframe');
    mapFrame.id = 'mapFrame';
    mapFrame.setAttribute('allowfullscreen', '');
    mapFrame.setAttribute('loading', 'lazy');
    mapFrame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    
    // Append Iframe to Responsive Maps Container
    responsiveMaps.appendChild(mapFrame);
    
    // Create Link Button
    var mapLink = document.createElement('a');
    mapLink.id = 'mapLink';
    mapLink.className = 'btn btn-secondary btn-sm shadow-sm';
    mapLink.style.cssText = '--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;';
    mapLink.setAttribute('role', 'button');
    mapLink.setAttribute('target', '_blank');
    mapLink.innerHTML = '<i class="bi bi-pin-map-fill me-2"></i>Open in Google Maps';
    
    // Create Button Container
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'd-grid gap-2 mx-auto';
    
    // Append Link Button to Button Container
    buttonContainer.appendChild(mapLink);
    
    // Append Responsive Maps Container and Button Container to Card
    card.appendChild(responsiveMaps);
    card.appendChild(buttonContainer);
    
    // Append Card to Collapse Container
    collapseContainer.appendChild(card);
    
    // Append Button and Collapse Container to Location Container
    locationContainer.appendChild(toggleButton);
    locationContainer.appendChild(collapseContainer);
    
    // JavaScript for Dynamic Content
    var defaultSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.942649844698!2d109.89921247371821!3d-7.360325872421276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa056029da10b%3A0x1ae278eb49746082!2sRutan%20Klas%20IIB%20Wonosobo!5e0!3m2!1sid!2sid!4v1716294170690!5m2!1sid!2sid";
    var defaultLink = "https://maps.app.goo.gl/KhnGaMs3pQRqDU336";

    toggleButton.addEventListener('click', function() {
        if (mapFrame.src === "") {
            mapFrame.src = defaultSrc;
            mapLink.href = defaultLink;
        } else {
            mapFrame.src = "";
            mapLink.href = "";
        }
    });
});