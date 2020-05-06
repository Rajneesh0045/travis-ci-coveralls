/**
 * Module to perform basic calculation
 * @module app
 */

/**
 * Function for addition
 * @param {Number} a - first number for addition
 * @param {Number} b - second number for addition
 */
const addition = (a, b) => a + b;

/**
 * Function for division
 * @param {Number} a - first number for division
 * @param {Number} b - second number for division
 */
const division = (a, b) => (b !== 0 ? a / b : NaN);

/**
 * Function for multiplication
 * @param {Number} a - first number for multiplication
 * @param {Number} b - second number for multiplication
 */
const multiplication = (a, b) => a * b;

/**
 * Function for substraction
 * @param {Number} a - first number for substraction
 * @param {Number} b - second number for substraction
 */
const substraction = (a, b) => (a >= b ? a - b : b - a);

module.exports = {
	addition,
	division,
	multiplication,
	substraction
};
