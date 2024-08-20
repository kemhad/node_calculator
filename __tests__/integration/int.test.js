import numberCruncher from '../../src/modules/calculation/numberCruncher';

describe('NumberCruncher Integration Tests', () => {

    test('should correctly add two numbers', () => {
      const calc = { numOne: '5', numTwo: '3', operator: 'add' };
      const result = numberCruncher(calc);
      expect(result).toBe(8);
    });
  
    test('should correctly subtract two numbers', () => {
      const calc = { numOne: '5', numTwo: '3', operator: 'subtract' };
      const result = numberCruncher(calc);
      expect(result).toBe(2);
    });
  
    test('should correctly multiply two numbers', () => {
      const calc = { numOne: '5', numTwo: '3', operator: 'multiply' };
      const result = numberCruncher(calc);
      expect(result).toBe(15);
    });
  
    test('should correctly divide two numbers', () => {
      const calc = { numOne: '6', numTwo: '3', operator: 'divide' };
      const result = numberCruncher(calc);
      expect(result).toBe(2);
    });
  
    test('should correctly calculate the percentage', () => {
      const calc = { numOne: '50', numTwo: '200', operator: 'percentage' };
      const result = numberCruncher(calc);
      expect(result).toBe(25);  
    });
  
    test('should correctly calculate the exponent', () => {
      const calc = { numOne: '2', numTwo: '3', operator: 'exponent' };
      const result = numberCruncher(calc);
      expect(result).toBe(8);  
    });
  
    test('should correctly calculate the greatest common divisor (GCD)', () => {
      const calc = { numOne: '8', numTwo: '12', operator: 'gcd' };
      const result = numberCruncher(calc);
      expect(result).toBe(4); 
    });
  
    test('should return null for an unknown operation', () => {
      const calc = { numOne: '5', numTwo: '3', operator: 'unknown' };
      const result = numberCruncher(calc);
      expect(result).toBeNull(); 
    });
  
});
