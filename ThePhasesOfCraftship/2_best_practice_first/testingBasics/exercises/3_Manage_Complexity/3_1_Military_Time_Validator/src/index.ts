

export default function validateMilitaryTime(timeRange: string): boolean {
    const hasRange = timeRange.includes(' - ');

    if(!hasRange) return false;

    return timeRange.split(' - ').length === 2;
}
