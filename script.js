console.log('Script loaded');
import tipcalc from "./utils/tipcalc.js";

const billAmount = document.getElementById('amount');
const tipPercentage = document.getElementById('tip');
const calculateTip = document.getElementById('calculate');
const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');


calculateTip.addEventListener('click', (e) => {
    e.preventDefault()

    const amount = parseFloat(billAmount.value);
    const percentage = parseFloat(tipPercentage.value);

      console.log('Amount:', amount);
  console.log('Percentage:', percentage);


    if (isNaN(amount) || isNaN(percentage) || amount < 0 || percentage < 0) {
  tipAmount.innerText = 'Invalid input';
  totalBill.innerText = '';
  return;
}

    const tip = tipcalc.calculateTip(amount, percentage);
    const total = tipcalc.calculateTotal(amount, tip);

    tipAmount.innerText = tipcalc.formatCurrency(tip);
    totalBill.innerText = tipcalc.formatCurrency(total);
});
