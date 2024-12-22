import calculateStats from "./index";

describe('stats calculator', () => {

    it.each([
        [[2, 4, 21, -8, 53, 40], -8],
        [[1, 2, 3, 4, 5], 1],
        [[-10, -20, -30, -40, -50], -50],
        [[0, 0, 0, 0, 0], 0],
        [[100, 200, 300, 400, 500], 100],
    ])('should know that the minimum value in %s sequence is %s', (sequence, expected) => {
        const output = calculateStats(sequence);

        expect(output.min).toBe(expected)
    })

    it.each([
        [[2, 4, 21, -8, 53, 40], 53],
        [[1, 2, 3, 4, 5], 5],
        [[-10, -20, -30, -40, -50], -10],
        [[0, 0, 0, 0, 0], 0],
        [[100, 200, 300, 400, 500], 500],
    ])('should know that the maximum value in %s sequence is %s', (sequence, expected) => {
        const output = calculateStats(sequence);

        expect(output.max).toBe(expected)
    })

    it.each([
        [[2, 4, 21, -8, 53, 40], 18.666666666667],
        [[1, 2, 3, 4, 5], 3],
        [[-10, -20, -30, -40, -50], -30],
        [[0, 0, 0, 0, 0], 0],
        [[100, 200, 300, 400, 500], 300],
    ])('should know that the average value in %s sequence is %s', (sequence, expected) => {
        const output = calculateStats(sequence);

        expect(output.avg).toBeCloseTo(expected)
    })

    it.each([
        [[2, 4, 21, -8, 53, 40], 6],
        [[1, 2, 3, 4, 5], 5],
        [[-10, -20, -30, -40, -50], 5],
        [[0, 0, 0, 0, 0], 5],
        [[100, 200, 300, 400, 500], 5],
    ])('should know that the count of values in %s sequence is %s', (sequence, expected) => {
        const output = calculateStats(sequence);

        expect(output.count).toBe(expected)
    })

    it('should know how to calculate the stats of an empty sequence', () => {
        const sequence: number[] = [];

        const output = calculateStats(sequence);

        expect(output.count).toBe(0)
        expect(output.min).toBe(0)
        expect(output.max).toBe(0)
        expect(output.avg).toBe(0)
    })
})
