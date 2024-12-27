
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

function handleConditionsByOperator(input: string, operator: Operator, handleMultipleStatements: (input: string) => boolean): boolean {
    const conditions = input.split(operator);
    let result = operator === Operator.OR ? false : true;

    for(const condition of conditions) {
        if(hasMultipleStatements(condition)) {
            return handleMultipleStatements(condition);
        }

        switch(operator) {
            case Operator.NOT:
                result = !isTrue(condition);
                break;
            case Operator.AND:
                result = result && isTrue(condition);
                break;
            case Operator.OR:
                result = result || isTrue(condition);
                break;
        }
    }

    return result;
}

function evaluateCondition(input: string): boolean {
    const hasNot = input.includes(Operator.NOT);
    const hasAnds = input.includes(Operator.AND);
    const hasOrs = input.includes(Operator.OR);
    const hasParentheses = input.includes('(');


    if (hasParentheses) {
        const start = input.indexOf('(');
        const end = input.lastIndexOf(')');

        const inner = input.slice(start + 1, end);
        const result = evaluateCondition(inner);

     
        input = input.replace(`(${inner})`, result ? Boolean.TRUE : Boolean.FALSE);
        
        return evaluateCondition(input);
    }

    if (hasNot) {
        return handleConditionsByOperator(input, Operator.NOT, evaluateCondition);
    }

    if (hasAnds) {
        return handleConditionsByOperator(input, Operator.AND, evaluateCondition);
    }

    if (hasOrs) {
        return handleConditionsByOperator(input, Operator.OR, evaluateCondition);
    }

    return isTrue(input);
}

export default function booleanCalculator(input: string): boolean {
    let trimmedInput = input.replace(/\s/g, '').trim();
   
    return evaluateCondition(trimmedInput);
}
