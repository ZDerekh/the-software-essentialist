export type CalculatedStats = {
    min: number;
    max: number;
    count: number;
    avg: number;
}

export default function calculateStats(sequence: number[]):CalculatedStats {
    let min = sequence[0] ?? 0;
    let max = sequence[0] ?? 0;
    let count = 0;
    let sum = 0;

    for (const value of sequence) {
        if (value < min) {
            min = value;
        }

        if (value > max) {
            max = value;
        }

        count++;
        sum += value;
    }
    
    return {
        min,
        max,
        count,
        avg: sum / count || 0,
    }
}
