import exp from '../../src/modules/calculation/util/exp.js';
import gcd from '../../src/modules/calculation//util/gcd.js';
import percentage from '../../src/modules/calculation/util/percentage.js';

describe('Mathematical Functions Unit Tests', () => {

    // Tester för exp-funktionen
    describe('Exponentiation Tests', () => {
        test('2 raised to the power of 3 should be 8', () => {
            expect(exp(2, 3)).toBe(8);
        });

        test('5 raised to the power of 0 should be 1', () => {
            expect(exp(5, 0)).toBe(1);
        });

        test('Negative base: -2 raised to the power of 3 should be -8', () => {
            expect(exp(-2, 3)).toBe(-8);
        });
    });

    // Tester för gcd-funktionen
    describe('Greatest Common Divisor Tests', () => {
        test('GCD of 12 and 15 should be 3', () => {
            expect(gcd(12, 15)).toBe(3);
        });

        test('GCD of -24 and 60 should be 12', () => {
            expect(gcd(-24, 60)).toBe(12);
        });

        test('GCD of 101 and 10 should be 1', () => {
            expect(gcd(101, 10)).toBe(1);
        });
    });

    // Tester för percentage-funktionen
    describe('Percentage Tests', () => {
        test('50 is 25% of 200', () => {
            expect(percentage(50, 200)).toBe(25);
        });

        test('75 is 300% of 25', () => {
            expect(percentage(75, 25)).toBe(300);
        });

        test('0 is 0% of any number', () => {
            expect(percentage(0, 50)).toBe(0);
        });
    });

});
//////