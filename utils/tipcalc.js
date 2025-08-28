
// function calculateTip(amount, percentage) {
//  return amount * (percentage/100);
// }

function calculateTip(amount, percentage) {
    if (typeof amount !== "number" || typeof percentage !== 'number') return 0;
    if (amount < 0 || percentage < 0) return 0;

    const tip = amount * (percentage / 100);
    return parseFloat(tip.toFixed(2));
}

function calculateTotal(amount, tip) {
    if (typeof amount !== 'number' || typeof tip !== 'number') return 0;
    return parseFloat((amount + tip).toFixed(2));
}

function validateAmount(value) {
    const num = parseFloat(value);
    return !isNaN(num) && num >= 0;
}

function formatCurrency(value, symbol = "₦") {
    if (typeof value !== 'number') return `${symbol}0.00`;
    return `${symbol}${value.toFixed(2)}`;
}

export default {
  calculateTip,
  calculateTotal,
  validateAmount,
  formatCurrency,
};