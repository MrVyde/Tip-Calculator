import tipcalc from "../utils/tipcalc.js";

test('Calculates correct tip for valid inputs', () => {
    expect(tipcalc.calculateTip(100, 15)).toBe(15.00);
});

test('returns 0 for a negative number', () => {
    expect(tipcalc.calculateTip(-100, 15)).toBe(0);
});

test('returns 0 for non-numeric-input', () => {
    expect(tipcalc.calculateTip('abc', 15)).toBe(0);
});