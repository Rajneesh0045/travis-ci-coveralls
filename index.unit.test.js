const { addition, division, multiplication, substraction } = require('./index');


describe('Calculator Test Suite', () => {
   test('1 + 1 returns 2', () => {
        expect(addition(1,1)).toBe(2);
   });
   
   test('3 + 3 returns 6', () => {
        expect(addition(3,3)).toBe(6);
   });

   test('1 - 1 returns 0', () => {
    expect(substraction(1,1)).toBe(0);
   });

   test('1 - 2 returns 1', () => {
    expect(substraction(1,2)).toBe(1);
   });

   test('2 * 2 returns 4', () => {
    expect(multiplication(2,2)).toBe(4);
   });

   test('4 / 2 returns 2', () => {
    expect(division(4,2)).toBe(2);
   });

   test('4 / 0 returns NaN', () => {
    expect(division(4,0)).toBe(NaN);
   });

})
