import { AbstractControl, ValidationErrors } from '@angular/forms';

export class birthDateValidator {
  static minDateValidator(control: AbstractControl): ValidationErrors | null {
    
    const date = control.value;
    const option = new Date(control.value);
    let currentDate: Date = new Date();
    let currentDateComparison: string = '';
    currentDate.setDate(currentDate.getDate() - 1);
    currentDateComparison = currentDate.toISOString().slice(0, 10);

    if (
      option.getDate() - currentDate.getDate() >= 0 &&
      option.getMonth() - currentDate.getMonth() >= 0 &&
      option.getFullYear() - currentDate.getFullYear() >= 0
    ) {
      return { minDateValidator: true };
    } else {
      return null;
    }
  }
}
