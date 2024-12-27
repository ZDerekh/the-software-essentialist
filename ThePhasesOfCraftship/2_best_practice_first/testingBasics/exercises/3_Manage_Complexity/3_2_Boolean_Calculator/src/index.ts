
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

function evaluateBoolean(input: string): boolean {
    const hasNot = input.includes(Operator.NOT);
    const hasAnds = input.includes(Operator.AND);
    const hasOrs = input.includes(Operator.OR);
    const hasParentheses = input.includes('(');


    if (hasParentheses) {
        const start = input.indexOf('(');
        const end = input.lastIndexOf(')');

        const inner = input.slice(start + 1, end);
        const result = evaluateBoolean(inner);

     
        input = input.replace(`(${inner})`, result ? Boolean.TRUE : Boolean.FALSE);
        
        return evaluateBoolean(input);
    }

    if (hasNot) {
        
        const conditions = input.split(Operator.NOT);

        if (hasMultipleStatements(conditions[1])) {
            return !evaluateBoolean(conditions[1]);
        }
        
        return !isTrue(conditions[1]);
    }

    if (hasAnds) {
        const conditions = input.split(Operator.AND);
        let result = true;

        for(const condition of conditions) {
            if(hasMultipleStatements(condition)) {
                return evaluateBoolean(condition);
            }

            result = result && isTrue(condition);
        }

        return result;
    }

    if (hasOrs) {
        const conditions = input.split(Operator.OR);
        let result = false;

        for(const condition of conditions) {
            if(hasMultipleStatements(condition)) {
                return evaluateBoolean(condition);
            }

            result = result || isTrue(condition);
        }

        return result;
    }

    return isTrue(input);
}

  
export default function booleanCalculator(input: string): boolean {
    let trimmedInput = input.replace(/\s/g, '').trim();
   
    return evaluateBoolean(trimmedInput);
}
