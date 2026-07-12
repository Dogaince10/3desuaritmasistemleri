(function () {
  var wrapper = document.getElementById('sliderWrapper');
  var prevBtn = document.getElementById('sliderPrev');
  var nextBtn = document.getElementById('sliderNext');
  var dotsContainer = document.getElementById('sliderDots');

  if (!wrapper) return;

  var slides = wrapper.querySelectorAll('.slide');
  var total = slides.length;
  var current = 0;
  var autoplayTimer = null;
  var AUTOPLAY_MS = 4000;

  /* Nokta oluştur */
  slides.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', (i + 1) + '. slayt');
    dot.addEventListener('click', function () { goTo(i); resetAutoplay(); });
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    dotsContainer.querySelectorAll('.slider-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  function goTo(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;
    wrapper.style.transform = 'translateX(-' + current * 100 + '%)';
    updateDots();
  }

  prevBtn.addEventListener('click', function () { goTo(current - 1); resetAutoplay(); });
  nextBtn.addEventListener('click', function () { goTo(current + 1); resetAutoplay(); });

  /* Otomatik geçiş */
  function startAutoplay() {
    autoplayTimer = setInterval(function () { goTo(current + 1); }, AUTOPLAY_MS);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();

  /* Dokunmatik kaydırma (mobil) */
  var touchStartX = 0;

  wrapper.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  wrapper.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? current + 1 : current - 1);
      resetAutoplay();
    }
  }, { passive: true });
})();

/* ===========================
   MOBİL MENÜ
   =========================== */
(function () {
  var toggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('navMobile');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
  });
})();

function closeMobileMenu() {
  var mobileNav = document.getElementById('navMobile');
  if (mobileNav) mobileNav.classList.remove('open');
}
