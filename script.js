let selectedGame = '';

const diamondOptions = {
  'SEWA BOT': [
    { label: '7 HARI - Rp 3.000', value: 1000 },
    { label: '1 BULAN  - Rp 6.00', value: 2500 },
    { label: 'PERMANEN - Rp 8.000', value: 5000 }
  ],

  'PREMIUM USER': [
    { label: '7 HARI - Rp 2.000', value: 1500 },
    { label: '1 BULAN  - Rp 4.000', value: 7000 },
    { label: 'PERMANEN - Rp 8.000', value: 10000 }
  ],
  'JADI BOT': [
    { label: '1 BULAN  - Rp 15.000', value: 12000 },
    { label: 'PERMANEN - Rp 25.000', value: 60000 }
  ]
};

function selectGame(game) {
  selectedGame = game;
  document.getElementById('topupForm').style.display = 'block';
  window.scrollTo(0, document.body.scrollHeight);

  // Isi ulang opsi nominal sesuai game
  const nominalSelect = document.getElementById('nominal');
  nominalSelect.innerHTML = '';
  diamondOptions[game].forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.label;
    nominalSelect.appendChild(opt);
  });
}

function submitTopup(event) {
  event.preventDefault();
  const id = document.getElementById('gameId').value;
  const nominal = document.getElementById('nominal').value;
  const nominalText = document.getElementById('nominal').selectedOptions[0].text;
  const payment = document.getElementById('payment').value;

  const message = `Halo Franki, saya ingin membeli ${selectedGame}:\nUsername: ${id}\nPaket: ${nominalText}\nMetode: ${payment}`;
  const phone = '6285351974033';
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(waUrl, '_blank');
}