// Load HTML sections dynamically
function loadSection(id, path) {
  fetch(path)
    .then(response => response.text())
    .then(html => document.getElementById(id).innerHTML = html);
}

// Load all sections
loadSection('header', 'header.html');
loadSection('footer', 'footer.html');
loadSection('calculator-section', 'sections/calculator.html');
loadSection('goddess-section', 'sections/goddess.html');
loadSection('cards-section', 'sections/cards.html');

// Loan calculator function
function calculateLoan() {
  const P = parseFloat(document.getElementById('amount').value) || 0;
  const n = parseInt(document.getElementById('days').value) || 0;
  const r = 0.5; // 50% per day
  const total = P * Math.pow(1 + r, n);
  const interest = total - P;
  document.getElementById('result').innerHTML =
    `Total: ₹${total.toFixed(2)}<br>Interest: ₹${interest.toFixed(2)}`;
}
