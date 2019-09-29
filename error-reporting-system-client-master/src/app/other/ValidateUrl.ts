import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const addUserFormValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const userPassword = control.get('userPassword');
    const userConfirmPassword = control.get('userConfirmPassword');
    console.log(userPassword.value);

    return userPassword.value === userConfirmPassword.value ? { 'matchingPassword': true } : null;
};
