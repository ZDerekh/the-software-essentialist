
enum Operator {
    AND = 'AND',
    OR = 'OR',
    NOT = 'NOT',
}

enum Boolean {
    TRUE = 'TRUE',
    FALSE = 'FALSE',
}


function isTrue(input: string): boolean {
    return input === Boolean.TRUE || input !== Boolean.FALSE;
}

function hasMultipleStatements(input: string): boolean {
    return input.includes(Operator.AND) || input.includes(Operator.OR);
}


  
export default function booleanCalculator(input: string): boolean {
    let trimmedInput = input.replace(/\s/g, '').trim();
    const hasNot = trimmedInput.includes(Operator.NOT);
    const hasAnds = trimmedInput.includes(Operator.AND);
    const hasOrs = trimmedInput.includes(Operator.OR);
    const hasParentheses = trimmedInput.includes('(');


    if (hasParentheses) {
        const start = trimmedInput.indexOf('(');
        const end = trimmedInput.lastIndexOf(')');

        const inner = trimmedInput.slice(start + 1, end);
        const result = booleanCalculator(inner);

     
        trimmedInput = trimmedInput.replace(`(${inner})`, result ? Boolean.TRUE : Boolean.FALSE);
        
        return booleanCalculator(trimmedInput);
    }

    if (hasNot) {
        
        const conditions = trimmedInput.split(Operator.NOT);

        if (hasMultipleStatements(conditions[1])) {
            return !booleanCalculator(conditions[1]);
        }
        
        return !isTrue(conditions[1]);
    }

    if (hasAnds) {
        const conditions = trimmedInput.split(Operator.AND);
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
        const conditions = trimmedInput.split(Operator.OR);
        let result = false;

        for(const condition of conditions) {
            if(hasMultipleStatements(condition)) {
                return booleanCalculator(condition);
            }

            result = result || isTrue(condition);
        }

        return result;
    }

    return isTrue(trimmedInput);
}
