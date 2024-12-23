import booleanCalculator from './index';
describe('boolean calculator', () => {
    it.each([
        ['TRUE', true],
        ['FALSE', false],
    ])('should know that %s resolves to %s', (input, expected) => {
        const result = booleanCalculator(input);
        expect(result).toBe(expected);
    });

    it.each([
        ['NOT TRUE', false],
        ['NOT FALSE', true],
    ])('should know how to handle NOT (%s) to resolve to %s', (input, expected) => {
        const result = booleanCalculator(input);

        expect(result).toBe(expected);
    });
});
