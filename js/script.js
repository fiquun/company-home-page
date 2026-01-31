let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 80) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener("DOMContentLoaded", () => {

  // FORM MESSAGE
  const form = document.getElementById("messageForm");
  const resultBox = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const pesan = document.getElementById("pesan").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const now = new Date();

    document.getElementById("time").innerText = now.toString();
    document.getElementById("rNama").innerText = nama;
    document.getElementById("rTanggal").innerText = tanggal;
    document.getElementById("rGender").innerText = gender;
    document.getElementById("rPesan").innerText = pesan;

    resultBox.classList.remove("empty");
  });

  const sections = document.querySelectorAll(".section-animate");

  const showOnScroll = () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const height = window.innerHeight;

      if (top < height - 120) {
        section.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", showOnScroll);
  showOnScroll();

});

  const form = document.getElementById("messageForm");
  const userNameEl = document.getElementById("userName");

  const namaInput = document.getElementById("nama");
  const tanggalInput = document.getElementById("tanggal");
  const pesanInput = document.getElementById("pesan");
  const resultBox = document.getElementById("result");

  const rNama = document.getElementById("rNama");
  const rTanggal = document.getElementById("rTanggal");
  const rGender = document.getElementById("rGender");
  const rPesan = document.getElementById("rPesan");
  const timeEl = document.getElementById("time");

  const savedName = localStorage.getItem("userName");
    if (savedName) {
      userNameEl.textContent = savedName;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

  const nama = namaInput.value;
  const tanggal = tanggalInput.value;
  const pesan = pesanInput.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  userNameEl.textContent = nama;
  localStorage.setItem("userName", nama);

  rNama.textContent = nama;
  rTanggal.textContent = tanggal;
  rGender.textContent = gender;
  rPesan.textContent = pesan;

  const now = new Date();
  timeEl.textContent = now.toLocaleString("id-ID");

  resultBox.classList.add("active");
});
