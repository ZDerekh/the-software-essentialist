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

    it.each([
        ['TRUE AND TRUE', true],
        ['TRUE AND FALSE', false],
        ['FALSE AND TRUE', false],
        ['FALSE AND FALSE', false],
    ])('should know how to handle AND (%s) to resolve to %s', (input, expected) => {
        const result = booleanCalculator(input);

        expect(result).toBe(expected);
    });

    it.each([
        ['TRUE OR TRUE', true],
        ['TRUE OR FALSE', true],
        ['FALSE OR TRUE', true],
        ['FALSE OR FALSE', false],
    ])('should know how to handle OR (%s) to resolve to %s', (input, expected) => {
        const result = booleanCalculator(input);

        expect(result).toBe(expected);
    });
});
