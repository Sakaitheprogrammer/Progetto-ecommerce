const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => nav.classList.toggle("active"));
function scrollToTop() {
  window.scrollTo(0, 0);
}

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

function Aggiungialcarrello(o) {
      var quantita = document.getElementById("quantita").value;
      var carrello = document.getElementById("carrello").innerHTML;
      var totale = parseInt(carrello) + parseInt(quantita);
      document.getElementById("carrello").innerHTML = totale;
    }

