import validateMilitaryTime from './index';

describe('military time validator', () => {
    it.each([
        ['01:12 | 14:32', false],
        ['01:12/14:32', false],
        ['01:12, 14:32', false],
        ['01:12 14:32', false],
    ])('knows what that the range should be separated by a `-`', (timeRange, expected) => {
        const output = validateMilitaryTime(timeRange);

        expect(output).toBe(expected);
    });

    it.each([
        ['01:12 - 14:32', true],
        ['-01:12 14:32', false],
        ['01:12 14:32-', false],
    ])('knows what that the range should have two times', (timeRange, expected) => {
        const output = validateMilitaryTime(timeRange);

        expect(output).toBe(expected);
    });
})
