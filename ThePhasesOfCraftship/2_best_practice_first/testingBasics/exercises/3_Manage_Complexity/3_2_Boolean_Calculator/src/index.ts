
function calculateSingleStatement(input: string): boolean {
    const isReversed = input.startsWith('NOT');
    const isTrue = input.includes('TRUE');
    return isReversed ? !isTrue : isTrue;
}

export default function booleanCalculator(input: string): boolean {
    const hasAnds = input.includes('AND');

    if (hasAnds) {
        const [left, right] = input.split('AND');
        return calculateSingleStatement(left) && calculateSingleStatement(right);
    }

    return calculateSingleStatement(input);
}
