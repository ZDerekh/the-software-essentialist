const getHour = (time: string) => parseInt(time.split(':')[0]);
const getMinute = (time: string) => parseInt(time.split(':')[1]);

export default function validateMilitaryTime(timeRange: string): boolean {
    const isRange = timeRange.includes(' - ');
    const range = timeRange.split(' - ');
    const hasTwoTimes = range.length === 2;

    if(!isRange && !hasTwoTimes) return false;

    const [startTime, endTime] = range;

    const startHour = getHour(startTime);
    const startMinute = getMinute(startTime);

    const endHour = getHour(endTime);
    const endMinute = getMinute(endTime);

    return startHour < 24 && startMinute < 60 && endHour < 24 && endMinute < 60;

}
