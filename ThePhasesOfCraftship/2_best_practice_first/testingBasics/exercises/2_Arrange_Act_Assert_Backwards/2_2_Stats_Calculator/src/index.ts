export type CalculatedStats = {
    min: number;
    max: number;
    count: number;
    avg: number;
}

export default function calculateStats(sequence: number[]):CalculatedStats {
    let min = sequence[0];
    let max = sequence[0];
    let count = 0;
    let avg = 0;

    for (const value of sequence) {
        if (value < min) {
            min = value;
        }
    }
    
    return {
        min,
        max,
        count,
        avg,
    }
}
