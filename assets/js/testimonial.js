document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        {
            content: "Pelayanan di Rutan Wonosobo sungguh luar biasa. Sistem terpadu mereka membuat segala proses menjadi lebih efisien dan mudah untuk diakses.",
            name: "Aulia Safira Putri",
            image: "https://cdn.pixabay.com/photo/2024/02/18/09/00/ai-generated-8580798_1280.jpg",
            rating: "★★★★★"
        },
        {
            content: "Saya sangat terkesan dengan sistem layanan terpadu di Rutan Wonosobo. Semua informasi dan layanan yang saya butuhkan tersedia dengan cepat dan akurat.",
            name: "Salsabila Aisyah Dewi",
            image: "https://cdn.pixabay.com/photo/2022/03/19/11/11/girl-7078324_1280.jpg",
            rating: "★★★★★"
        },
        {
            content: "Rutan Wonosobo benar-benar memahami kebutuhan pengguna layanannya. Sistem terpadu mereka membantu saya menyelesaikan berbagai administrasi dengan lancar.",
            name: "Zahra Amalia Puspita",
            image: "https://cdn.pixabay.com/photo/2024/02/18/09/00/ai-generated-8580799_960_720.jpg",
            rating: "★★★★★"
        },
        {
            content: "Pelayanan di Rutan Wonosobo sungguh profesional. Sistem terpadu mereka membuat saya merasa didukung dan terbantu dalam proses yang saya jalani.",
            name: "Rania Putri Kirana",
            image: "https://cdn.pixabay.com/photo/2022/02/07/14/22/woman-6999505_1280.jpg",
            rating: "★★★★★"
        },
        {
            content: "Sistem layanan terpadu di Rutan Wonosobo sungguh mempermudah hidup saya. Semua proses dari pendaftaran hingga pelaporan dapat dilakukan dengan mudah dan cepat.",
            name: "Farah Nurul Hikmah",
            image: "https://cdn.pixabay.com/photo/2021/09/22/13/51/woman-6646904_1280.jpg",
            rating: "★★★★★"
        }
    ];

    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');

    const indicators = document.createElement('div');
    indicators.classList.add('carousel-indicators', 'mt-4');

    testimonials.forEach((testimonial, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item', 'text-center', 'py-4', 'rounded');
        if (index === 0) item.classList.add('active');

        const img = document.createElement('img');
        img.src = testimonial.image;
        img.alt = `Testimonial ${index + 1}`;
        img.classList.add('testimonial-img', 'rounded-circle', 'border', 'border-4', 'border-white', 'shadow', 'mb-2');

        const content = document.createElement('p');
        content.classList.add('testimonial-content', 'small', 'fst-italic', 'my-2');
        content.textContent = `"${testimonial.content}"`;

        const name = document.createElement('h5');
        name.classList.add('my-2');
        name.textContent = testimonial.name;

        const rating = document.createElement('div');
        rating.classList.add('text-warning', 'mb-4', 'fs-2');
        rating.textContent = testimonial.rating;

        item.appendChild(img);
        item.appendChild(content);
        item.appendChild(name);
        item.appendChild(rating);

        carouselInner.appendChild(item);

        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#testimonialCarousel');
        indicator.setAttribute('data-bs-slide-to', index.toString());
        if (index === 0) indicator.classList.add('active');
        indicators.appendChild(indicator);
    });

    const carousel = document.createElement('div');
    carousel.id = 'testimonialCarousel';
    carousel.classList.add('carousel', 'slide');
    carousel.setAttribute('data-bs-ride', 'carousel');
    carousel.appendChild(carouselInner);
    carousel.appendChild(indicators);

    const container = document.getElementById('testimonialCarousel');
    const heading = document.createElement('h4');
    heading.className = 'fs-5 text-center fw-bold text-uppercase mt-4';
    heading.innerText = 'Testimoni';
    container.parentNode.insertBefore(heading, container);

    container.replaceWith(carousel);
});
