
function calculateSingleStatement(input: string): boolean {
    const isReversed = input.startsWith('NOT');
    const isTrue = input.includes('FALSE')!== true;
    return isReversed ? !isTrue : isTrue;
}

export default function booleanCalculator(input: string): boolean {
    const hasAnds = input.includes('AND');
    const hasOrs = input.includes('OR');
    if (hasAnds) {
        const [left, right] = input.split('AND');
        return calculateSingleStatement(left) && calculateSingleStatement(right);
    }

    if (hasOrs) {
        const [left, right] = input.split('OR');
        return calculateSingleStatement(left) || calculateSingleStatement(right);
    }

    return calculateSingleStatement(input);
}
