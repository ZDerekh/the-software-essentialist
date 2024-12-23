
function isTrue(input: string): boolean {
    return input.includes('FALSE')!== true;    
}

export default function booleanCalculator(input: string): boolean {
    const hasNot = input.includes('NOT');
    const hasAnds = input.includes('AND');
    const hasOrs = input.includes('OR');

    if (hasNot) {
        const [_, right] = input.split('NOT');
        return !isTrue(right);
    }
    if (hasAnds) {
        const [left, right] = input.split('AND');
        return isTrue(left) && isTrue(right);
    }

    if (hasOrs) {
        const [left, right] = input.split('OR');
        return isTrue(left) || isTrue(right);
    }


    return isTrue(input);
}
