function goTo(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + n).classList.add('active');

  if (n === 2) {
    document.querySelectorAll('.photo').forEach((p, i) => {
      setTimeout(() => p.classList.add('show'), i * 120);
    });
  }
}

/* Candle */
function lightCandle() {
  const c = document.getElementById('candle');
  c.textContent = '🔥';
  c.style.opacity = '1';
}

/* Cake Cut */
function cutCake() {
  document.getElementById('cakeBox').classList.add('cut');
  boom();
}

/* Crackers */
function boom() {
  const box = document.getElementById('crackers');
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('span');
    s.textContent = '🎉';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = Math.random() * 100 + 'vh';
    box.appendChild(s);
    setTimeout(() => s.remove(), 1200);
  }
}

/* Floating hearts */
const hearts = document.querySelector('.hearts');
setInterval(() => {
  const h = document.createElement('span');
  h.innerHTML = '❤️';
  h.style.left = Math.random() * 100 + 'vw';
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 9000);
}, 400);
