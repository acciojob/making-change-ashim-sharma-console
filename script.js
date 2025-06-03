const makeChange = (c) => {
  let amount = Number(c);
  if (isNaN(amount) || amount <= 0 || amount >= 100) {
    return { error: 'Please enter a number between 1 and 99' };
  }

  const coins = { q: 0, d: 0, n: 0, p: 0 };
  coins.q = Math.floor(amount / 25);
  amount %= 25;

  coins.d = Math.floor(amount / 10);
  amount %= 10;

  coins.n = Math.floor(amount / 5);
  amount %= 5;

  coins.p = amount;

  return coins;
};

document.getElementById('calculateBtn').addEventListener('click', () => {
  const input = document.getElementById('amount').value;
  const result = makeChange(input);

  const output = document.getElementById('result');
  if (result.error) {
    output.textContent = result.error;
  } else {
    output.textContent = JSON.stringify(result, null, 2);
  }
});
