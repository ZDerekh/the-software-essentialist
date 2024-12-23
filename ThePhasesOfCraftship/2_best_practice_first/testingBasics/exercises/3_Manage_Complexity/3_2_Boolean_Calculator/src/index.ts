
export default function booleanCalculator(input: string): boolean {
    const isReversed = input.startsWith('NOT');
    const isTrue = input.includes('TRUE');
    return isReversed ? !isTrue : isTrue;
}
