import validateMilitaryTime from './index';

describe('military time validator', () => {
    it.each([
        ['01:12 - 14:32', true],
    ])('confirm the %s time range is %s`thy military time', (timeRange, expected) => {
        const output = validateMilitaryTime(timeRange);

        expect(output).toBe(expected);
    });
})
