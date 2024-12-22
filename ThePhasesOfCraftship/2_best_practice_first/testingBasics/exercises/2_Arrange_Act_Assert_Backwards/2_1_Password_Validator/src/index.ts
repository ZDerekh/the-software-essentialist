export enum PasswordValidationErrorType {
    LENGTH = 'LENGTH',
    DIGIT = 'DIGIT',
    UPPERCASE = 'UPPERCASE'
}

export interface PasswordValidationError {
    type: PasswordValidationErrorType;
    message: string;
}

export default function validatePassword(password: string) {
    let isValid=true;
    let errors: PasswordValidationError[] = [];

    if(password.length < 5 || password.length > 15){
        isValid=false;
        errors.push({type: PasswordValidationErrorType.LENGTH, message: "Password must be between 5 and 15 characters long"});
    }

    if(!password.match(/[0-9]/)){
        isValid=false;
        errors.push({type: PasswordValidationErrorType.DIGIT, message: "Password must contain at least one digit"});
    }

    return {
        result: isValid,
        errors: errors
    }
}