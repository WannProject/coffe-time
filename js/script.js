// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searcBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searcBox.focus();
  e.preventDefault();
};

// toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburgern menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar sidebar untuk menghilangka navnya
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
document.addEventListener("DOMContentLoaded", function () {
  const itemDetailModal = document.querySelector("#item-detail-modal");
  const itemDetailButton = document.querySelector(".item-detail-button");
  const closeModalIcon = document.querySelector(".modal .close-icon");

  // Fungsi untuk menampilkan modal
  const openModal = () => {
    itemDetailModal.style.display = "flex";
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    itemDetailModal.style.display = "none";
  };

  // Event listener untuk tombol buka modal
  itemDetailButton.addEventListener("click", (e) => {
    openModal();
    e.preventDefault();
  });

  // Event listener untuk tombol tutup modal
  closeModalIcon.addEventListener("click", (e) => {
    closeModal();
    e.preventDefault();
  });

  // Event listener untuk menutup modal saat mengklik di luar modal
  window.addEventListener("click", (e) => {
    if (e.target === itemDetailModal) {
      closeModal();
    }
  });
});
