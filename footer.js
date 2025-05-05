let footer_code = `<footer>
  <section id="contact">
    <h2 data-bg="Контакти" data-en="Contact">Контакти</h2>
    <p><strong data-bg="Адрес:" data-en="Address:">Адрес:</strong> ул. "България" 3, гр. Добрич</p>
    <p><strong data-bg="Телефон:" data-en="Phone:">Телефон:</strong> 058/ 655 645</p>
    <p><strong>Email:</strong> info-800325@edu.mon.bg</p>
    <div id="map"></div>
  </section>
  <p data-bg="© 2025 ЧПГТП 'Райко Цончев' | Всички права запазени" 
     data-en="© 2025 Raiko Tsonchev Private School | All rights reserved">
     © 2025 ЧПГТП "Райко Цончев" | Всички права запазени
  </p>
</footer>`;

document.addEventListener("DOMContentLoaded", function () {
  // Inject footer into the DOM
  document.getElementById("footer").innerHTML = footer_code;

  const mapElement = document.getElementById("map");
  if (mapElement) {
    const map = L.map("map").setView([43.567723, 27.827067], 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
    L.marker([43.567723, 27.827067])
      .addTo(map)
      .bindPopup('ЧПГТП "Райко Цончев"<br>ул. България 3')
      .openPopup();
  }
});