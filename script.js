// =====================================================
// SCRIPT.JS – AyoSholat Landing Page
// Tim Islamic Future – PAI UMY 2026
// =====================================================

// ===================== HAMBURGER MENU =====================
// Fungsi: membuka/menutup menu navigasi di tampilan mobile

// Ambil elemen hamburger dan menu dari HTML
var hamburger = document.getElementById('hamburger');
var navMenu   = document.getElementById('nav-menu');

// Tambahkan event klik pada tombol hamburger
hamburger.addEventListener('click', function () {
  // Toggle class 'aktif' pada hamburger (animasi ikon)
  hamburger.classList.toggle('aktif');
  // Toggle class 'terbuka' pada menu (tampilkan/sembunyikan)
  navMenu.classList.toggle('terbuka');
});

// Tutup menu otomatis saat salah satu link diklik
var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('aktif');
    navMenu.classList.remove('terbuka');
  });
});


// ===================== NAVBAR SCROLL SHADOW =====================
// Fungsi: menambahkan bayangan pada navbar saat halaman discroll ke bawah

var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ===================== SMOOTH SCROLL =====================
// Fungsi: membuat perpindahan halaman terasa halus saat link navbar diklik

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = link.getAttribute('href'); // Ambil target link, misal "#hero"

    // Hanya jalankan smooth scroll jika target adalah anchor (diawali #)
    if (target && target.startsWith('#')) {
      e.preventDefault(); // Batalkan perilaku default browser

      var targetSection = document.querySelector(target);
      if (targetSection) {
        // Hitung posisi elemen target minus tinggi navbar
        var offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  });
});


// ===================== ANIMASI FADE-IN SAAT SCROLL =====================
// Fungsi: elemen dengan class 'fade-in' akan muncul perlahan saat terlihat di layar

// Gunakan Intersection Observer – cara modern yang efisien
var fadeElements = document.querySelectorAll('.fade-in');

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // Tambahkan class 'visible' agar elemen muncul (lihat CSS)
      entry.target.classList.add('visible');
      // Hentikan observasi setelah animasi dijalankan (efisiensi)
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12 // Animasi mulai saat 12% elemen terlihat
});

// Daftarkan semua elemen fade-in untuk dipantau
fadeElements.forEach(function (el) {
  observer.observe(el);
});


// ===================== PENANGANAN GAMBAR GAGAL DIMUAT =====================
// Fungsi: menampilkan teks pengganti jika gambar tidak bisa dimuat

var allImages = document.querySelectorAll('img');

allImages.forEach(function (img) {
  // Event 'error' terpanggil jika gambar gagal dimuat
  img.addEventListener('error', function () {
    // Ganti elemen gambar dengan div fallback sederhana
    var fallback = document.createElement('div');
    fallback.className = 'img-fallback';
    fallback.innerHTML = '🖼️<br><small>Gambar belum ditambahkan</small>';

    if (img.parentElement) {
      img.parentElement.replaceChild(fallback, img);
    }
  });
});
