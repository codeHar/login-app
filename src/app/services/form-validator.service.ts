import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidatorService {
  constructor() {}

  /**
   * @param formGroup
   * @param controlName
   * @param validationType
   * @returns boolean
   */
  controlHasError(
    formGroup: FormGroup,
    controlName: string,
    validationType: string
  ): boolean {
    const control = formGroup.controls[controlName];
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }
}
