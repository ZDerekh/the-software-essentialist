function hasTimeRangeFormat(timeRange: string): boolean {
    return timeRange.includes('-');
}

export default function validateMilitaryTime(timeRange: string): boolean {
    return hasTimeRangeFormat(timeRange);
}
