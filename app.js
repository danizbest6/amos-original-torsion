/* ============================================
   AMOS ORIGINAL TORSION — Telegram Mini App
   Addis Ababa | Original Torsion Shoes
   Telegram: t.me/Amosorginaltorshion
   TikTok: @amostorshin.store
   Phone: 090 062 0856
   ============================================ */

const CURRENCY = 'ETB';
const FREE_DELIVERY = 8000;

function formatPrice(n) {
  return n.toLocaleString() + ' ' + CURRENCY;
}

const PRODUCTS = [
  {
    id: 1,
    name: "Torsion Velocity X",
    category: "Running",
    price: 6500,
    oldPrice: 7500,
    badge: "New",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    description: "Lightweight racing shoe with advanced torsion plate for natural foot flexion and explosive energy return. Ideal for tempo runs and race day.",
    sizes: [40, 41, 42, 43, 44, 45],
    stock: { 40: 5, 41: 8, 42: 12, 43: 10, 44: 6, 45: 3 }
  },
  {
    id: 2,
    name: "Apex Court Pro",
    category: "Basketball",
    price: 7200,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    description: "High-top performance basketball shoe engineered for lockdown support and court feel. Responsive cushioning for explosive cuts.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    stock: { 40: 4, 41: 7, 42: 9, 43: 11, 44: 5, 45: 2, 46: 1 }
  },
  {
    id: 3,
    name: "Urban Flux Low",
    category: "Lifestyle",
    price: 4800,
    oldPrice: 5500,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    description: "Everyday sneaker with premium materials and clean lines. Comfort-first design that transitions seamlessly from street to casual.",
    sizes: [39, 40, 41, 42, 43, 44],
    stock: { 39: 6, 40: 10, 41: 14, 42: 12, 43: 8, 44: 4 }
  },
  {
    id: 4,
    name: "Forge Trainer",
    category: "Training",
    price: 5200,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
    description: "Stable cross-training shoe built for lifting, HIIT and functional movement. Wide base and reinforced lateral support.",
    sizes: [40, 41, 42, 43, 44, 45],
    stock: { 40: 7, 41: 9, 42: 11, 43: 8, 44: 5, 45: 3 }
  },
  {
    id: 5,
    name: "Nova Runner GTX",
    category: "Running",
    price: 7800,
    badge: "Waterproof",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80",
    description: "All-weather running shoe with GORE-TEX membrane. Stay dry without sacrificing breathability or cushioning on long miles.",
    sizes: [40, 41, 42, 43, 44],
    stock: { 40: 3, 41: 6, 42: 8, 43: 7, 44: 4 }
  },
  {
    id: 6,
    name: "Shadow Slip-On",
    category: "Lifestyle",
    price: 3900,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80",
    description: "Minimalist slip-on with soft knit upper and memory foam insole. Zero-distraction comfort for all-day wear.",
    sizes: [39, 40, 41, 42, 43, 44, 45],
    stock: { 39: 8, 40: 12, 41: 15, 42: 13, 43: 9, 44: 6, 45: 4 }
  },
  {
    id: 7,
    name: "Pulse Elite",
    category: "Running",
    price: 6900,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c56a6b80?w=600&q=80",
    description: "Max-cushion daily trainer with dual-density midsole. Plush underfoot feel that still delivers a responsive ride.",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    stock: { 40: 5, 41: 8, 42: 10, 43: 9, 44: 7, 45: 4, 46: 2 }
  },
  {
    id: 8,
    name: "Court Dominator",
    category: "Basketball",
    price: 6100,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&q=80",
    description: "Aggressive traction pattern and containment midfoot for players who live on the perimeter. Lightweight yet protective.",
    sizes: [41, 42, 43, 44, 45],
    stock: { 41: 6, 42: 9, 43: 11, 44: 8, 45: 5 }
  },
  {
    id: 9,
    name: "Metro Classic",
    category: "Lifestyle",
    price: 4500,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80",
    description: "Timeless low-profile sneaker with full-grain leather overlays. The versatile staple every rotation needs.",
    sizes: [39, 40, 41, 42, 43, 44],
    stock: { 39: 4, 40: 9, 41: 12, 42: 14, 43: 10, 44: 7 }
  },
  {
    id: 10,
    name: "Titan Lift",
    category: "Training",
    price: 5800,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80",
    description: "Flat, stable platform designed for heavy lifts. Secure heel lockdown and durable outsole for gym longevity.",
    sizes: [40, 41, 42, 43, 44, 45],
    stock: { 40: 6, 41: 8, 42: 10, 43: 9, 44: 5, 45: 3 }
  }
];

// State
let cart = JSON.parse(localStorage.getItem('torsion_cart') || '[]');
let currentView = 'home';
let currentProduct = null;
let selectedSize = null;
let selectedQty = 1;
let currentFilter = 'all';
let currentSort = 'featured';

// Telegram WebApp
const tg = window.Telegram?.WebApp;

function initTelegram() {
  if (!tg) return;

  tg.ready();
  tg.expand();
  tg.setHeaderColor('#0a0a0a');
  tg.setBackgroundColor('#0a0a0a');

  // Apply theme if available
  if (tg.themeParams) {
    const p = tg.themeParams;
    // Keep our dark theme for consistency, but respect if needed
  }

  // MainButton setup
  tg.MainButton.setParams({
    color: '#ff4d00',
    text_color: '#000000'
  });

  // Back button
  tg.BackButton.onClick(() => {
    if (currentView === 'product' || currentView === 'checkout') {
      navigate(currentView === 'checkout' ? 'cart' : 'shop');
    } else if (currentView === 'success') {
      navigate('home');
    }
  });
}

// Navigation
function navigate(view, productId = null) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(`view-${view}`);
  if (target) target.classList.add('active');

  currentView = view;

  // Header back button
  const backBtn = document.getElementById('backBtn');
  const logo = document.getElementById('logo');
  if (view === 'product' || view === 'checkout' || view === 'success') {
    backBtn.style.display = 'flex';
    logo.style.display = 'none';
  } else {
    backBtn.style.display = 'none';
    logo.style.display = 'flex';
  }

  // Bottom nav active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.view === view);
  });

  // Telegram BackButton
  if (tg) {
    if (view === 'product' || view === 'checkout' || view === 'success') {
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }
  }

  // Render content
  if (view === 'home') renderFeatured();
  if (view === 'shop') renderShop();
  if (view === 'product' && productId) renderProduct(productId);
  if (view === 'cart') renderCart();
  if (view === 'checkout') renderCheckout();

  // Scroll top
  document.getElementById('main').scrollTop = 0;

  updateMainButton();
}

function filterAndGo(category) {
  currentFilter = category;
  document.getElementById('categoryFilter').value = category;
  navigate('shop');
}

// Product rendering
function createProductCard(p) {
  return `
    <article class="product-card" onclick="navigate('product', ${p.id})">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-cat">${p.category}</div>
        <div class="product-price">
          ${formatPrice(p.price)}
          ${p.oldPrice ? `<span class="old">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const featured = PRODUCTS.filter(p => p.badge || p.id <= 4).slice(0, 4);
  document.getElementById('featuredGrid').innerHTML = featured.map(createProductCard).join('');
}

function applyFilters() {
  currentFilter = document.getElementById('categoryFilter').value;
  currentSort = document.getElementById('sortFilter').value;
  renderShop();
}

function renderShop() {
  let list = [...PRODUCTS];

  if (currentFilter !== 'all') {
    list = list.filter(p => p.category === currentFilter);
  }

  switch (currentSort) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  const grid = document.getElementById('shopGrid');
  if (list.length === 0) {
    grid.innerHTML = `<div class="cart-empty"><div class="empty-icon">👟</div><p>No products found</p></div>`;
  } else {
    grid.innerHTML = list.map(createProductCard).join('');
  }
}

function renderProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return navigate('shop');

  currentProduct = p;
  selectedSize = null;
  selectedQty = 1;

  const sizesHtml = p.sizes.map(s => {
    const available = p.stock[s] > 0;
    return `<button class="size-btn" data-size="${s}" ${!available ? 'disabled' : ''} onclick="selectSize(${s})">${s}</button>`;
  }).join('');

  document.getElementById('productDetail').innerHTML = `
    <img class="detail-img" src="${p.image}" alt="${p.name}" />
    ${p.badge ? `<span class="detail-badge">${p.badge}</span>` : ''}
    <h1 class="detail-name">${p.name}</h1>
    <div class="detail-price">
      ${formatPrice(p.price)}
      ${p.oldPrice ? `<span class="old" style="font-size:16px;color:var(--text-muted);text-decoration:line-through;margin-left:8px;">${formatPrice(p.oldPrice)}</span>` : ''}
    </div>
    <p class="detail-desc">${p.description}</p>

    <div class="detail-section">
      <h3>Select Size (EU)</h3>
      <div class="size-grid">${sizesHtml}</div>
    </div>

    <div class="detail-section">
      <h3>Quantity</h3>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty(-1)">−</button>
        <span class="qty-value" id="qtyValue">1</span>
        <button class="qty-btn" onclick="changeQty(1)">+</button>
      </div>
    </div>

    <div class="add-to-cart-bar">
      <button class="btn btn-secondary" onclick="navigate('shop')">Back</button>
      <button class="btn btn-primary" id="addCartBtn" onclick="addToCart()">Add to Cart</button>
    </div>
  `;
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.size) === size);
  });
}

function changeQty(delta) {
  selectedQty = Math.max(1, Math.min(10, selectedQty + delta));
  document.getElementById('qtyValue').textContent = selectedQty;
}

function addToCart() {
  if (!currentProduct) return;
  if (!selectedSize) {
    showToast('Please select a size');
    return;
  }

  const existing = cart.find(i => i.id === currentProduct.id && i.size === selectedSize);
  if (existing) {
    existing.qty += selectedQty;
  } else {
    cart.push({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image,
      size: selectedSize,
      qty: selectedQty
    });
  }

  saveCart();
  updateCartBadge();
  showToast('Added to cart ✓');
  updateMainButton();
}

// Cart
function saveCart() {
  localStorage.setItem('torsion_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.classList.toggle('visible', total > 0);
}

function renderCart() {
  const container = document.getElementById('cartContent');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <button class="btn btn-primary" style="margin-top:20px" onclick="navigate('shop')">Browse Shoes</button>
      </div>
    `;
    return;
  }

  const itemsHtml = cart.map((item, idx) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">Size ${item.size} · Qty ${item.qty}</div>
        </div>
        <div class="cart-item-bottom">
          <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
          <button class="cart-item-remove" onclick="removeFromCart(${idx})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= FREE_DELIVERY ? 0 : 250;
  const total = subtotal + shipping;

  container.innerHTML = `
    ${itemsHtml}
    <div class="cart-summary">
      <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
      <div class="summary-row"><span>Delivery</span><span>${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
      <button class="btn btn-primary btn-full" style="margin-top:20px" onclick="navigate('checkout')">Proceed to Checkout</button>
    </div>
  `;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCart();
  updateMainButton();
  showToast('Item removed');
}

// Checkout
function renderCheckout() {
  if (cart.length === 0) {
    navigate('cart');
    return;
  }

  // Prefill from Telegram user if available
  if (tg?.initDataUnsafe?.user) {
    const user = tg.initDataUnsafe.user;
    const nameField = document.getElementById('fullName');
    if (nameField && !nameField.value) {
      nameField.value = [user.first_name, user.last_name].filter(Boolean).join(' ');
    }
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= FREE_DELIVERY ? 0 : 250;
  const total = subtotal + shipping;

  document.getElementById('checkoutSummary').innerHTML = `
    <div class="summary-row"><span>Items (${cart.reduce((s,i)=>s+i.qty,0)})</span><span>${formatPrice(subtotal)}</span></div>
    <div class="summary-row"><span>Delivery</span><span>${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span></div>
    <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
  `;
}

function placeOrder(e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const notes = document.getElementById('notes').value.trim();

  if (!name || !phone || !address) {
    showToast('Please fill all required fields');
    return;
  }

  const orderId = 'AT' + Date.now().toString(36).toUpperCase();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= FREE_DELIVERY ? 0 : 250;
  const total = subtotal + shipping;

  const orderData = {
    orderId,
    customer: { name, phone, address, notes },
    items: cart.map(i => ({
      name: i.name,
      size: i.size,
      qty: i.qty,
      price: i.price
    })),
    subtotal,
    shipping,
    total,
    timestamp: new Date().toISOString()
  };

  // Send to Telegram bot if available
  if (tg) {
    try {
      tg.sendData(JSON.stringify(orderData));
    } catch (err) {
      console.log('sendData not available in this context', err);
    }

    // Also try MainButton or haptic
    tg.HapticFeedback?.notificationOccurred('success');
  }

  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();

  document.getElementById('orderIdText').textContent = `Order #${orderId}`;
  navigate('success');

  // Reset form
  document.getElementById('checkoutForm').reset();
}

// Main Button (Telegram)
function updateMainButton() {
  if (!tg) return;

  if (currentView === 'product' && currentProduct) {
    tg.MainButton.setText('ADD TO CART — ' + formatPrice(currentProduct.price));
    tg.MainButton.show();
    tg.MainButton.onClick(() => addToCart());
  } else if (currentView === 'cart' && cart.length > 0) {
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    tg.MainButton.setText('CHECKOUT — ' + formatPrice(total));
    tg.MainButton.show();
    tg.MainButton.onClick(() => navigate('checkout'));
  } else if (currentView === 'checkout') {
    tg.MainButton.setText('PLACE ORDER');
    tg.MainButton.show();
    tg.MainButton.onClick(() => document.getElementById('checkoutForm').requestSubmit());
  } else {
    tg.MainButton.hide();
  }
}

// Toast
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// Event listeners
document.getElementById('cartBtn').addEventListener('click', () => navigate('cart'));
document.getElementById('backBtn').addEventListener('click', () => {
  if (currentView === 'product') navigate('shop');
  else if (currentView === 'checkout') navigate('cart');
  else if (currentView === 'success') navigate('home');
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  initTelegram();
  updateCartBadge();
  renderFeatured();
  navigate('home');
});
