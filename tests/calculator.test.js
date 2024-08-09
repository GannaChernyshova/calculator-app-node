const Calculator = require('../src/calculator');

test('addition', () => {
  expect(Calculator.add(2, 3)).toBe(5);
});

test('subtraction', () => {
  expect(Calculator.subtract(5, 2)).toBe(3);
});

test('multiplication', () => {
  expect(Calculator.multiply(3, 4)).toBe(12);
});

test('division', () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});

test('division by zero', () => {
  expect(() => Calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
});

test('parse addition expression', () => {
  expect(Calculator.parseExpression('2+3')).toEqual(['2', '+', '3']);
});

test('parse subtraction expression', () => {
  expect(Calculator.parseExpression('5-2')).toEqual(['5', '-', '2']);
});

test('parse multiplication expression', () => {
  expect(Calculator.parseExpression('3*4')).toEqual(['3', '*', '4']);
});

test('parse division expression', () => {
  expect(Calculator.parseExpression('10/2')).toEqual(['10', '/', '2']);
});
