document.addEventListener("DOMContentLoaded", function () {
  // Buat elemen footer
  var footer = document.createElement("footer");
  footer.classList.add("footer", "bg-transparent", "mb-4", "mx-2");

  // Buat container di dalam footer
  var container = document.createElement("div");
  container.classList.add("container", "text-center");

  // Buat elemen paragraf untuk teks hak cipta
  var copyright = document.createElement("p");
  copyright.classList.add("mb-0", "small", "text-muted");
  copyright.textContent = "Copyright © 2024 Humas Rutan Wonosobo";

  // Buat elemen paragraf untuk teks hak dilindungi
  var allRights = document.createElement("p");
  allRights.classList.add("mb-0", "small", "text-muted");
  allRights.textContent = "All Rights Reserved";

  // Gabungkan elemen-elemen secara bertingkat
  container.appendChild(copyright);
  container.appendChild(allRights);
  footer.appendChild(container);

  // Masukkan footer ke dalam halaman
  document.body.appendChild(footer);
});