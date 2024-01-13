document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Coffe Moy", img: "img1.jpg", price: 20000 },
      { id: 2, name: "Aya Coffe", img: "img2.jpeg", price: 25000 },
      { id: 3, name: "Doypack", img: "img3.jpg", price: 30000 },
      { id: 4, name: "Whiff Roasters", img: "img4.jpeg", price: 35000 },
      { id: 5, name: "Toraja Arabica", img: "img5.png", price: 40000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItemIndex = this.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (cartItemIndex === -1) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
      } else {
        const cartItem = this.items[cartItemIndex];
        cartItem.quantity++;
        cartItem.total = cartItem.price * cartItem.quantity;
      }

      this.quantity++;
      this.total += newItem.price;
    },

    remove(item) {
      const cartItemIndex = this.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (cartItemIndex !== -1) {
        const cartItem = this.items[cartItemIndex];

        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          cartItem.total = cartItem.price * cartItem.quantity;
        } else {
          this.items.splice(cartItemIndex, 1);
        }

        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Validasi formulir
const tombolCheckout = document.querySelector(".checkout-button");
tombolCheckout.disabled = true;

const formulir = document.getElementById("checkoutForm"); // Memperbaiki typo pada id formulir

formulir.addEventListener("input", function () {
  let semuaFieldTerisi = true;

  for (let i = 0; i < formulir.elements.length; i++) {
    if (formulir.elements[i].value.trim().length === 0) {
      semuaFieldTerisi = false;
      break;
    }
  }

  tombolCheckout.disabled = !semuaFieldTerisi;
  tombolCheckout.classList.toggle("disabled", !semuaFieldTerisi);
});

// kirim data ketika tombol diklik
document
  .querySelector(".checkout-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.open(
      "https://wa.me/6285825091329?text=Saya%20Ingin%20memesan%20produk%20anda"
    );
  });

// format pesan whatsap
const formatMessage = (obj) => {
  return `Saya ingin memesan produk anda`;
};

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
