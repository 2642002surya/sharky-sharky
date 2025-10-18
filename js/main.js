// Load HTML sections dynamically
function loadSection(id, path) {
  fetch(path)
    .then(response => response.text())
    .then(html => document.getElementById(id).innerHTML = html)
    .catch(err => console.error(`Error loading ${path}:`, err));
}

// Load all sections
loadSection('header', 'header.html');
loadSection('footer', 'footer.html');
loadSection('calculator-section', 'sections/calculator.html');
loadSection('founders-section', 'sections/founders.html');
loadSection('goddess-section', 'sections/goddess.html');
loadSection('cards-section', 'sections/cards.html');
loadSection('terms-section', 'sections/terms.html');

// Loan calculator function with coin animation
function calculateLoan() {
  const P = parseFloat(document.getElementById('amount').value) || 0;
  const n = parseInt(document.getElementById('days').value) || 0;
  const r = 0.5; // 50% per day
  const total = P * Math.pow(1 + r, n);
  const interest = total - P;
  const resultEl = document.getElementById('result');
  resultEl.innerHTML = `Total: ₹${total.toFixed(2)}<br>Interest: ₹${interest.toFixed(2)}`;

  // Coin animation effect
  const coinsContainer = document.createElement('div');
  coinsContainer.className = 'floating-coins-calculator';
  for (let i = 0; i < 10; i++) {
    const coin = document.createElement('div');
    coin.className = 'coin-calc';
    coin.innerText = '💰';
    coin.style.left = `${Math.random() * 120}px`;
    coin.style.animationDelay = `${Math.random() * 1}s`;
    coinsContainer.appendChild(coin);
  }
  resultEl.appendChild(coinsContainer);
  setTimeout(() => coinsContainer.remove(), 2000);
}
