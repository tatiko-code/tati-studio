(function () {
  var params = new URLSearchParams(location.search);
  var slug = params.get('dress');
  var dress = DRESSES.find(function (d) { return d.slug === slug; });

  if (!dress) {
    location.href = 'collection.html';
    return;
  }

  // Page title & heading
  document.getElementById('pageTitle').textContent = dress.name + ' — Tati Studio';
  document.getElementById('dressHeroName').textContent = dress.name;

  // Build slider slides
  var track = document.getElementById('dressGallery');
  var counter = document.getElementById('dsCounter');
  var currentIdx = 0;
  var slides = [];

  dress.photos.forEach(function (photo, idx) {
    var slide = document.createElement('div');
    slide.className = 'ds-slide' + (idx === 0 ? ' active' : '');
    var img = document.createElement('img');
    img.src = 'images/collection/' + dress.slug + '/' + photo;
    img.alt = dress.name + ' ' + (idx + 1);
    img.loading = idx === 0 ? 'eager' : 'lazy';
    slide.appendChild(img);
    slide.addEventListener('click', function () { openLightbox(idx); });
    track.appendChild(slide);
    slides.push(slide);
  });

  counter.textContent = '1 / ' + dress.photos.length;

  function showSlide(idx) {
    slides[currentIdx].classList.remove('active');
    currentIdx = (idx + dress.photos.length) % dress.photos.length;
    slides[currentIdx].classList.add('active');
    counter.textContent = (currentIdx + 1) + ' / ' + dress.photos.length;
  }

  document.getElementById('dsPrev').addEventListener('click', function () { showSlide(currentIdx - 1); });
  document.getElementById('dsNext').addEventListener('click', function () { showSlide(currentIdx + 1); });

  // Also love — up to 3 other dresses
  var alsoLove = document.getElementById('alsoLove');
  var myIdx = DRESSES.indexOf(dress);
  DRESSES.filter(function (_, i) { return i !== myIdx; }).slice(0, 3).forEach(function (d) {
    var card = document.createElement('a');
    card.className = 'coll-card';
    card.href = 'dress.html?dress=' + d.slug;
    card.innerHTML =
      '<div class="coll-img-wrap">' +
        '<img src="images/collection/' + d.slug + '/' + d.photos[0] + '" alt="' + d.name + '" loading="lazy" />' +
      '</div>' +
      '<div class="coll-meta">' +
        '<span class="coll-name">' + d.name + '</span>' +
      '</div>';
    alsoLove.appendChild(card);
  });

  // Lightbox
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCounter = document.getElementById('lbCounter');
  var lbIdx = 0;

  function openLightbox(idx) {
    lbIdx = idx;
    showLb();
    lb.setAttribute('aria-hidden', 'false');
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('active');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showLb() {
    lbImg.src = 'images/collection/' + dress.slug + '/' + dress.photos[lbIdx];
    lbCounter.textContent = (lbIdx + 1) + ' / ' + dress.photos.length;
  }

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', function () {
    lbIdx = (lbIdx - 1 + dress.photos.length) % dress.photos.length;
    showLb();
  });
  document.getElementById('lbNext').addEventListener('click', function () {
    lbIdx = (lbIdx + 1) % dress.photos.length;
    showLb();
  });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { lbIdx = (lbIdx - 1 + dress.photos.length) % dress.photos.length; showLb(); }
    if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % dress.photos.length; showLb(); }
  });
})();
