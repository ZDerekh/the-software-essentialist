import validateMilitaryTime from './index';

describe('military time validator', () => {
    it.each([
        ['01:12 | 14:32', false],
        ['01:12/14:32', false],
        ['01:12, 14:32', false],
        ['01:12 14:32', false],
        ['01:12-14:32', true],
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

    it.each([
        ['09:82 - 14:32', false],
        ['01:12 - 52:32', false],
        ['13:12 - 14:72', false],
    ])('knows what that the max hour is 23 and the max minute is 59 in range %s', (timeRange, expected) => {
        const output = validateMilitaryTime(timeRange);

        expect(output).toBe(expected);
    });

    it.each([
        ['09:82 - 07:32', false],
        ['23:12 - 00:01', false],
        ['13:12 - 04:12', false],
    ])('knows what that start time should be before end time in range %s', (timeRange, expected) => {
        const output = validateMilitaryTime(timeRange);

        expect(output).toBe(expected);
    });
})
