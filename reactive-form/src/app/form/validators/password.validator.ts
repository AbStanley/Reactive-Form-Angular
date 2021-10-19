import { AbstractControl} from '@angular/forms';

export class passwordValidator {
  static notSamePassword(c: AbstractControl) {
    if (c.get('password')!.value == c.get('confirmPassword')!.value) {
      return null;
    }
    return { notSamePassword: true };
  }
}
