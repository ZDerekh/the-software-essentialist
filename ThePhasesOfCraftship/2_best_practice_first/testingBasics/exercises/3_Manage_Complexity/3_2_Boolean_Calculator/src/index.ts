
function isTrue(input: string): boolean {
    return input.includes('FALSE')!== true;    
}

function hasMultipleStatements(input: string): boolean {
    return input.includes('AND') || input.includes('OR');
}

export default function booleanCalculator(input: string): boolean {
    const hasNot = input.includes('NOT');
    const hasAnds = input.includes('AND');
    const hasOrs = input.includes('OR');

    if (hasNot) {
        const [_, right] = input.split('NOT');

        if (hasMultipleStatements(right)) {
            return !booleanCalculator(right);
        }
        
        return !isTrue(right);
    }
    if (hasAnds) {
        const [left, right] = input.split('AND');

        if (hasMultipleStatements(right)) {
            return booleanCalculator(right);
        }

        if (hasMultipleStatements(left)) {
            return booleanCalculator(left);
        }

        return isTrue(left) && isTrue(right);
    }

    if (hasOrs) {
        const [left, right] = input.split('OR');

        if (hasMultipleStatements(right)) {
            return booleanCalculator(right);
        }

        if (hasMultipleStatements(left)) {
            return booleanCalculator(left);
        }

        return isTrue(left) || isTrue(right);
    }


    return isTrue(input);
}
