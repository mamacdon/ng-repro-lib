// tslint:disable: directive-selector
import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators, ValidationErrors } from '@angular/forms';

/**
 * Directive that requires the control's value to be less than or equal to the provided number.
 *
 * It basically exposes Angular's builtin `Validators.max()` to template-driven forms.
 *
 * Usage:
 * ```html
 * Enter a number greater than 5: <input type="number" [max]="'5'">
 * Enter a number greater than 10: <input type="number" max="10">
 * ```
 */
@Directive({
  selector: '[max]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true }]
})
export class MaxDirective implements Validator, OnInit {

  @Input() max: number;

  ngOnInit() {
    this.max = typeof this.max === 'string' ? Number(this.max) : this.max;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return Validators.max(this.max)(control);
  }
}
