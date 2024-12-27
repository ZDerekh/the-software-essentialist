
function isTrue(input: string): boolean {
    return input === 'TRUE' || input !== 'FALSE';
}

function hasMultipleStatements(input: string): boolean {
    return input.includes(' AND ') || input.includes(' OR ');
}

export default function booleanCalculator(input: string): boolean {
    const hasNot = input.includes('NOT');
    const hasAnds = input.includes('AND');
    const hasOrs = input.includes('OR');
    const hasParentheses = input.includes('(');

    if (hasParentheses) {
        const start = input.indexOf('(');
        const end = input.lastIndexOf(')');

        const inner = input.slice(start + 1, end);
        const result = booleanCalculator(inner);

     
        input = input.replace(`(${inner})`, result ? 'TRUE' : 'FALSE');
        
        return booleanCalculator(input);
    }

    if (hasNot) {
        const conditions = input.split('NOT ');

        if (hasMultipleStatements(conditions[1])) {
            return !booleanCalculator(conditions[1]);
        }
        
        return !isTrue(conditions[1]);
    }

    if (hasAnds) {
        const conditions = input.split(' AND ');
        let result = true;



        for(const condition of conditions) {
            if(hasMultipleStatements(condition)) {
                return booleanCalculator(condition);
            }

            result = result && isTrue(condition);
        }

        return result;
    }

    if (hasOrs) {
        const conditions = input.split(' OR ');
        let result = false;

        for(const condition of conditions) {
            if(hasMultipleStatements(condition)) {
                return booleanCalculator(condition);
            }

            result = result || isTrue(condition);
        }

        return result;
    }

    return isTrue(input);
}
