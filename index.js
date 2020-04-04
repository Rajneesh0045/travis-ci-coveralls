const addition = (a, b) => a + b;

const division = (a, b) => (b !== 0 ? a / b : NaN);

const multiplication = (a, b) => a * b;

const substraction = (a, b) => (a > b ? a - b : b - a);

module.exports = {
	addition,
	division,
	multiplication,
	substraction
};
