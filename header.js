let header_code = `
<header>
    <h1 data-bg="ЧПГТП 'Райко Цончев'" data-en="Raiko Tsonchev Private School">
      ЧПГТП "Райко Цончев"
    </h1>
    <p data-bg="Официален сайт на училището" data-en="Official school website">
      Официален сайт на училището
    </p>
  </header>
  
  <nav>
    <div class="nav-links">
      <div class="dropdown">
        <a href="#" data-bg="За училището" data-en="About the School">За училището</a>
        <div class="dropdown-content">
          <a href="mission.html" data-bg="Мисия" data-en="Mission">Мисия</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="#" data-bg="Администрация" data-en="Administration">Администрация</a>
        <div class="dropdown-content">
          <a href="taxes.html" data-bg="Такси и стипендии" data-en="Taxes and scholarships">Такси и стипендии</a>
        </div>
      </div>
      <a href="index.html" data-bg="Начало" data-en="Home">Начало</a>
      <a href="news.html" data-bg="Новини" data-en="News">Новини</a>
      <a href="contact.html" data-bg="Контакти" data-en="Contact">Контакти</a>
    </div>
    <div class="nav-right">
      <div class="search-container">
        <button onclick="toggleSearch()" class="search-btn">🔍</button>
        <input type="text" id="search-bar" placeholder="Търси..." />
      </div>
      <div class="lang-switch" onclick="toggleLanguage()">🌐 EN / BG</div>
    </div>
  </nav>`;