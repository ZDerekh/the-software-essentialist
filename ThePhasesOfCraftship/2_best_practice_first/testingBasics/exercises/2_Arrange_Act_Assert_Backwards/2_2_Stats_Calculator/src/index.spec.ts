import calculateStats from "./index";

describe('stats calculator', () => {
    it('should know that the minimum value in [2, 4, 21, -8, 53, 40] sequence is -8', () => {
        const sequence = [2, 4, 21, -8, 53, 40];

        const output = calculateStats(sequence);

        expect(output.min).toBe(-8)
    })

    it('should know that the maximum value in [2, 4, 21, -8, 53, 40] sequence is 53', () => {
        const sequence = [2, 4, 21, -8, 53, 40];

        const output = calculateStats(sequence);

        expect(output.max).toBe(53)
    })

    it('should know that the average value in [2, 4, 21, -8, 53, 40] sequence is 18.666666666667', () => {
        const sequence = [2, 4, 21, -8, 53, 40];

        const output = calculateStats(sequence);

        expect(output.avg).toBeCloseTo(18.666666666667)
    })

    it('should know that the count of values in [2, 4, 21, -8, 53, 40] sequence is 6', () => {
        const sequence = [2, 4, 21, -8, 53, 40];

        const output = calculateStats(sequence);

        expect(output.count).toBe(6)
    })
})
