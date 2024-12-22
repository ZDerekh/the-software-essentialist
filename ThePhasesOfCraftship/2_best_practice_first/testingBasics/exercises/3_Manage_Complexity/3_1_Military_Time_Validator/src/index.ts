const getHour = (time: string) => parseInt(time.split(':')[0]);
const getMinute = (time: string) => parseInt(time.split(':')[1]);
const isValidHour = (hour: number) => hour < 24;
const isValidMinute = (minute: number) => minute < 60;

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

    const isValidTime = isValidHour(startHour) && isValidMinute(startMinute) && isValidHour(endHour) && isValidMinute(endMinute);

    return isValidTime;

}
