/* ═══════════════════════════════════════════
   Flower Paradise — Main Script
   ═══════════════════════════════════════════ */

// ── PHOTO DATA (Unsplash free CDN) ──
// Each photo URL uses the Unsplash source API: free, no key needed
const PHOTOS = {
  hero:    'https://images.unsplash.com/photo-1487530811015-780780943d9a?w=900&q=80&fit=crop',
  catBouquets:    'https://images.unsplash.com/photo-1490750967868-88df5691cc8e?w=700&q=80&fit=crop',
  catPlants:      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80&fit=crop',
  catArrangements:'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=700&q=80&fit=crop',

  // Product images — 8 different flowers
  p1: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&q=80&fit=crop',  // розы и пионы
  p2: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&q=80&fit=crop',  // эустома и зелень
  p3: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=500&q=80&fit=crop',  // герберы и альстромерии
  p4: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500&q=80&fit=crop',  // plant monstera
  p5: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80&fit=crop',  // white wedding bouquet
  p6: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&q=80&fit=crop',  // tulips
  p7: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80&fit=crop',  // orchid
  p8: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80&fit=crop',  // arrangement

  // Gallery photos
  g1: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&fit=crop',  // свадебная флористика
  g2: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=500&q=80&fit=crop',  // авторский букет
  g3: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80&fit=crop',  // ботанический стиль
  g4: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&q=80&fit=crop',  // нежная коллекция
  g5: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=900&q=80&fit=crop',  // осенняя палитра
  g6: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&q=80&fit=crop',  // тюльпаны

  // Blog photos
  b1: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&fit=crop',  // уход за цветами
  b2: 'https://images.unsplash.com/photo-1548199569-3e1c6aa8f469?w=600&q=80&fit=crop',  // флористика
  b3: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80&fit=crop',  // комнатные растения
};

// ── PRODUCTS DATA ──
const products = [
  { id:1, name:'Розовое облако',       cat:'Букеты',      price:3200, badge:'Хит',       desc:'Нежные розы и пионы',            img: PHOTOS.p1 },
  { id:2, name:'Лесная сказка',        cat:'Букеты',      price:2800, badge:null,         desc:'Эустома и зелень',               img: PHOTOS.p2 },
  { id:3, name:'Огненный закат',       cat:'Букеты',      price:4500, badge:'Новинка',    desc:'Герберы и альстромерии',         img: PHOTOS.p3 },
  { id:4, name:'Монстера Deliciosa',   cat:'Растения',    price:2200, badge:null,         desc:'Тропическое растение',           img: PHOTOS.p4 },
  { id:5, name:'Свадебный шик',        cat:'Свадебные',   price:8500, badge:'Эксклюзив',  desc:'Белые пионы и ранункулюс',       img: PHOTOS.p5 },
  { id:6, name:'Весенний день',        cat:'Акции',       price:1900, badge:'Акция',      desc:'Тюльпаны сезонные',              img: PHOTOS.p6 },
  { id:7, name:'Орхидея Фаленопсис',  cat:'Растения',    price:3500, badge:null,         desc:'Элегантная белая орхидея',       img: PHOTOS.p7 },
  { id:8, name:'Стол флориста',        cat:'Композиции',  price:6800, badge:null,         desc:'Авторская интерьерная композиция',img: PHOTOS.p8 },
];

const blogPosts = [
  { cat:'Уход за цветами', title:'Как продлить жизнь срезанных роз дома',              date:'12 мая 2025', excerpt:'Правильный уход позволяет сохранить розы свежими на 10–14 дней. Делимся секретами флористов.',                                      img: PHOTOS.b1 },
  { cat:'Флористика',       title:'Тренды 2025: что выбирают невесты этим летом',       date:'5 мая 2025',  excerpt:'Минимализм, сухоцветы и нежные пастельные оттенки — рассказываем о свадебных трендах сезона.',                                   img: PHOTOS.b2 },
  { cat:'Растения',         title:'10 растений, которые очищают воздух в квартире',     date:'28 апр 2025', excerpt:'Монстера, потос и хлорофитум не только красивы, но и полезны для здоровья вашего дома.',                                         img: PHOTOS.b3 },
];

const reviews = [
  { text:'Заказывала букет маме на юбилей — пришёл точно в срок, невероятно красивый. Мама была в восторге!',              name:'Анна С.',     city:'Москва, ★★★★★' },
  { text:'Уже третий раз покупаю цветы в Flower Paradise. Качество всегда на высоте, флористы работают с душой.',           name:'Михаил К.',   city:'Химки, ★★★★★'  },
  { text:'Отличный сервис! Букет был собран точно по описанию, доставка быстрая. Буду возвращаться снова.',                 name:'Елена В.',    city:'Одинцово, ★★★★☆'},
];

const galleryLabels = ['Свадебная флористика','Авторский букет','Ботанический стиль','Нежная коллекция','Осенняя палитра','Тюльпаны'];

// ── STATE ──
let cart = [];
let currentUser = null;
let favorites = new Set();

// ── RENDER HERO PHOTO ──
function initHero() {
  const img = document.getElementById('heroPhoto');
  if (img) img.src = PHOTOS.hero;
}

// ── RENDER CATEGORIES ──
function renderCategories() {
  const catImgs = ['catBouquets','catPlants','catArrangements'];
  document.querySelectorAll('.cat-img').forEach((el, i) => {
    el.src = PHOTOS[catImgs[i]];
    el.alt = el.dataset.alt || '';
  });
}

// ── RENDER PRODUCTS ──
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const items = filter === 'all' ? products : products.filter(p => p.cat === filter);

  grid.innerHTML = items.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <button class="product-fav ${favorites.has(p.id) ? 'active' : ''}"
                onclick="toggleFav(${p.id}, event)"
                title="В избранное">${favorites.has(p.id) ? '❤️' : '🤍'}</button>
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <p class="product-cat">${p.cat}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">${p.price.toLocaleString('ru')} ₽</span>
          <button class="add-to-cart" onclick="addToCart(${p.id}, event)">В корзину</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat, btn) {
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  renderProducts(cat === 'all' ? 'all' : cat);
}

// ── GALLERY ──
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const keys = ['g1','g2','g3','g4','g5','g6'];
  grid.innerHTML = keys.map((key, i) => `
    <div class="gallery-item">
      <img src="${PHOTOS[key]}" alt="${galleryLabels[i]}" loading="lazy">
      <div class="gallery-caption">${galleryLabels[i]}</div>
    </div>
  `).join('');
}

// ── BLOG ──
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = blogPosts.map(p => `
    <div class="blog-card">
      <div class="blog-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
      </div>
      <p class="blog-cat">${p.cat}</p>
      <h3 class="blog-title">${p.title}</h3>
      <p class="blog-excerpt">${p.excerpt}</p>
      <p class="blog-meta">${p.date} · 5 мин чтения</p>
    </div>
  `).join('');
}

// ── REVIEWS ──
function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  grid.innerHTML = reviews.map(r => `
    <div class="review-card">
      <p class="review-stars">★★★★★</p>
      <p class="review-text">"${r.text}"</p>
      <p class="reviewer">${r.name}</p>
      <p class="reviewer-city">${r.city}</p>
    </div>
  `).join('');
}

// ── CART ──
function addToCart(id, event) {
  if (event) event.stopPropagation();
  const p = products.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartBadge();
  renderCart();

  const btn = event ? event.target : null;
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = '✓ Добавлено';
    btn.style.background = 'var(--sage-dark)';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 1600);
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function renderCart() {
  const items = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!items) return;

  if (!cart.length) {
    items.innerHTML = `<div class="empty-cart"><p>Корзина пуста</p><span style="font-size:0.85rem;color:var(--muted)">Добавьте букеты из каталога</span></div>`;
    footer.innerHTML = '';
    return;
  }

  items.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${i.img}" alt="${i.name}">
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${i.name}</p>
        <p class="cart-item-price">${i.price.toLocaleString('ru')} ₽</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${i.id}, -1)">−</button>
          <span class="qty-val">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${i.id})">✕</button>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  footer.innerHTML = `
    <div class="cart-subtotal">
      <span>Итого</span>
      <strong>${total.toLocaleString('ru')} ₽</strong>
    </div>
    <button class="submit-btn" onclick="openCheckout()">Оформить заказ</button>
    <button class="btn-secondary" style="width:100%;margin-top:0.5rem;padding:0.7rem"
            onclick="clearCart()">Очистить корзину</button>`;
}

function changeQty(id, delta) {
  const i = cart.find(x => x.id === id);
  if (!i) return;
  i.qty += delta;
  if (i.qty <= 0) cart = cart.filter(x => x.id !== id);
  updateCartBadge();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartBadge();
  renderCart();
}

function clearCart() {
  cart = [];
  updateCartBadge();
  renderCart();
}

function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('open');
}

// ── FAVORITES ──
function toggleFav(id, event) {
  if (event) event.stopPropagation();
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  const activeBtn = document.querySelector('.filter-btn.active');
  const activeFilter = activeBtn ? activeBtn.textContent.trim() : 'all';
  renderProducts(activeFilter === 'Все' ? 'all' : activeFilter);
}

// ── ORDER MODAL ──
function openCheckout() {
  document.getElementById('cartPanel').classList.remove('open');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById('modalTitle').textContent = 'Оформить заказ';
  document.getElementById('modalBody').innerHTML = `
    <div style="margin-bottom:1.5rem">
      ${cart.map(i => `
        <div class="cart-item" style="margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--sand)">
          <div class="cart-item-img"><img src="${i.img}" alt="${i.name}"></div>
          <div class="cart-item-info">
            <p class="cart-item-name">${i.name}</p>
            <p class="cart-item-price">${(i.price * i.qty).toLocaleString('ru')} ₽ × ${i.qty}</p>
          </div>
        </div>`).join('')}
    </div>
    <div class="form-row">
      <div class="form-group"><label>Имя получателя</label><input type="text" placeholder="Имя" value="${currentUser?.name || ''}"></div>
      <div class="form-group"><label>Телефон</label><input type="tel" placeholder="+7 999 000 00 00" value="${currentUser?.phone || ''}"></div>
    </div>
    <div class="form-group"><label>Адрес доставки</label><input type="text" placeholder="Улица, дом, квартира"></div>
    <div class="form-row">
      <div class="form-group"><label>Дата</label><input type="date" value="${new Date().toISOString().split('T')[0]}"></div>
      <div class="form-group"><label>Время</label>
        <select><option>10:00–12:00</option><option>12:00–14:00</option><option>14:00–16:00</option><option>16:00–18:00</option><option>18:00–20:00</option></select>
      </div>
    </div>
    <div class="form-group"><label>Открытка (необязательно)</label><textarea placeholder="Текст на открытке..."></textarea></div>
    <div class="form-group"><label>Способ оплаты</label>
      <select><option>Картой онлайн</option><option>Наличными курьеру</option><option>СБП (QR-код)</option></select>
    </div>
    <div class="order-total"><span>Итого к оплате</span><strong>${total.toLocaleString('ru')} ₽</strong></div>
    <button class="submit-btn" onclick="placeOrder()">Подтвердить заказ →</button>`;

  openModal();
}

function placeOrder() {
  const orderNum = 'FP-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('modalBody').innerHTML = `
    <div class="success-screen">
      <div class="success-icon">🌸</div>
      <h3>Заказ оформлен!</h3>
      <p>Флорист уже приступает к сборке вашего букета</p>
      <div class="order-number">${orderNum}</div>
      <p>Номер заказа для отслеживания. Мы отправим SMS-уведомление.</p>
      <button class="btn-primary" onclick="closeModalDirect();clearCart()">Отлично!</button>
    </div>`;
  if (currentUser) currentUser.orders = (currentUser.orders || 0) + 1;
}

// ── AUTH ──
function openAuthModal() {
  document.getElementById('modalTitle').textContent = 'Войти в аккаунт';
  document.getElementById('modalBody').innerHTML = `
    <div class="auth-tabs">
      <button class="auth-tab active" onclick="switchTab('login', this)">Вход</button>
      <button class="auth-tab" onclick="switchTab('register', this)">Регистрация</button>
    </div>
    <div class="auth-panel active" id="tab-login">
      <div class="form-group"><label>Email</label><input type="email" placeholder="your@email.com" id="loginEmail"></div>
      <div class="form-group"><label>Пароль</label><input type="password" placeholder="••••••••" id="loginPass"></div>
      <button class="submit-btn" onclick="doLogin()">Войти</button>
      <p style="text-align:center;margin-top:1rem;font-size:0.8rem;color:var(--muted)">
        Забыли пароль? <a href="#" style="color:var(--sage-dark)">Восстановить</a>
      </p>
    </div>
    <div class="auth-panel" id="tab-register">
      <div class="form-row">
        <div class="form-group"><label>Имя</label><input type="text" placeholder="Анна" id="regName"></div>
        <div class="form-group"><label>Фамилия</label><input type="text" placeholder="Иванова" id="regSurname"></div>
      </div>
      <div class="form-group"><label>Email</label><input type="email" placeholder="your@email.com" id="regEmail"></div>
      <div class="form-group"><label>Телефон</label><input type="tel" placeholder="+7 999 000 00 00" id="regPhone"></div>
      <div class="form-group"><label>Пароль</label><input type="password" placeholder="Минимум 8 символов" id="regPass"></div>
      <button class="submit-btn" onclick="doRegister()">Создать аккаунт</button>
    </div>`;
  openModal();
}

function switchTab(tab, btn) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  if (!email) { showToast('Введите email'); return; }
  currentUser = { name: email.split('@')[0], email, orders: 0 };
  closeModalDirect();
  updateProfileBtn();
  showToast('Добро пожаловать, ' + currentUser.name + '!');
}

function doRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  if (!name || !email) { showToast('Заполните обязательные поля'); return; }
  currentUser = { name, email, phone, orders: 0 };
  closeModalDirect();
  updateProfileBtn();
  showToast('Аккаунт создан! Добро пожаловать, ' + name + '!');
}

function updateProfileBtn() {
  const btn = document.getElementById('profileBtn');
  if (!btn) return;
  if (currentUser) {
    btn.textContent = currentUser.name + ' ▾';
    updateProfileMenu();
  } else {
    btn.textContent = 'Войти';
  }
}

function updateProfileMenu() {
  const menu = document.getElementById('profileMenu');
  if (!currentUser || !menu) return;
  menu.innerHTML = `
    <div class="user-info">
      <strong>${currentUser.name}</strong>
      <p>${currentUser.email}</p>
    </div>
    <button class="dropdown-item" onclick="openOrdersModal()">📦 Мои заказы</button>
    <button class="dropdown-item" onclick="closeDropdown()">❤️ Избранное (${favorites.size})</button>
    <button class="dropdown-item" onclick="closeDropdown()">👤 Профиль</button>
    <div class="dropdown-divider"></div>
    <button class="dropdown-item" onclick="logout()" style="color:var(--terracotta)">Выйти</button>`;
}

function openOrdersModal() {
  closeDropdown();
  document.getElementById('modalTitle').textContent = 'Мои заказы';
  document.getElementById('modalBody').innerHTML = (currentUser && currentUser.orders > 0)
    ? `<div style="text-align:center;padding:2rem">
         <p style="font-family:var(--serif);font-size:1.2rem;font-style:italic;margin-bottom:0.5rem">
           У вас ${currentUser.orders} заказ(ов)
         </p>
         <p style="font-size:0.85rem;color:var(--muted)">История заказов будет отображена здесь</p>
       </div>`
    : `<div class="empty-cart" style="padding:2.5rem">
         <p>Заказов пока нет</p>
         <span style="font-size:0.85rem">Сделайте первый заказ из каталога</span>
       </div>`;
  openModal();
}

function logout() {
  currentUser = null;
  const btn = document.getElementById('profileBtn');
  if (btn) btn.textContent = 'Войти';
  closeDropdown();
  showToast('Вы вышли из аккаунта');
}

function toggleProfile() {
  if (!currentUser) { openAuthModal(); return; }
  updateProfileMenu();
  document.getElementById('profileMenu').classList.toggle('open');
}

function closeDropdown() {
  const menu = document.getElementById('profileMenu');
  if (menu) menu.classList.remove('open');
}

// ── MODAL ──
function openModal() {
  document.getElementById('modalOverlay').classList.add('open');
}
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
}
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

// ── QUICK VIEW ──
function openQuickView(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalBody').innerHTML = `
    <div class="quickview-img">
      <img src="${p.img}" alt="${p.name}">
    </div>
    <p style="font-size:0.78rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--sage-dark);margin-bottom:0.4rem">${p.cat}</p>
    <h3 style="font-family:var(--serif);font-size:1.8rem;font-weight:400;margin-bottom:0.5rem">${p.name}</h3>
    <p style="color:var(--muted);line-height:1.7;margin-bottom:1.5rem">
      ${p.desc}. Свежайшие цветы от лучших поставщиков, ручная сборка флористов Flower Paradise.
      Возможен заказ открытки и выбор удобного времени доставки.
    </p>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:0.75rem">
      <span style="font-family:var(--serif);font-size:2rem;color:var(--sage-dark)">${p.price.toLocaleString('ru')} ₽</span>
      ${p.badge ? `<span style="background:var(--terracotta);color:#fff;padding:0.25rem 0.75rem;font-size:0.75rem;border-radius:2px">${p.badge}</span>` : ''}
    </div>
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
      <button class="submit-btn" style="flex:1;min-width:180px" onclick="addToCart(${p.id});closeModalDirect()">Добавить в корзину</button>
      <button class="btn-secondary" style="padding:1rem 1.5rem" onclick="toggleFav(${p.id});this.textContent=favorites.has(${p.id})?'❤️ В избранном':'🤍 В избранное'">
        ${favorites.has(p.id) ? '❤️ В избранном' : '🤍 В избранное'}
      </button>
    </div>`;
  openModal();
}

// ── TOAST ──
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ── NAV MOBILE ──
function toggleNav() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.classList.contains('mobile-open');
  links.classList.toggle('mobile-open', !isOpen);
  Object.assign(links.style, isOpen
    ? { display: '' }
    : { display: 'flex', flexDirection: 'column', position: 'absolute',
        top: '64px', left: '0', right: '0', background: 'var(--cream)',
        padding: '1rem 2rem', borderBottom: '1px solid var(--sand)', zIndex: '99' });
}

// ── PRODUCT CARD CLICK ──
document.addEventListener('click', function (e) {
  const card = e.target.closest('.product-card');
  if (card && !e.target.closest('.add-to-cart') && !e.target.closest('.product-fav')) {
    openQuickView(parseInt(card.dataset.id));
  }
  if (!e.target.closest('.profile-dropdown')) closeDropdown();
});

// ── SMOOTH SCROLL ──
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});

// ── INIT ──
initHero();
renderCategories();
renderProducts();
renderGallery();
renderBlog();
renderReviews();
renderCart();