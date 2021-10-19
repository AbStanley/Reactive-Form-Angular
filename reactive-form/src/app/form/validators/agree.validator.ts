import { AbstractControl, ValidationErrors } from '@angular/forms';

export class agreeValidator {
  static mustBeChecked(control: AbstractControl): ValidationErrors | null {
    if (control.value !== true) {
      return { checked: true };
    }
    return null;
  }
}
