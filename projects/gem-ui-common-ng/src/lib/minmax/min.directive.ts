// tslint:disable: directive-selector
import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators, ValidationErrors } from '@angular/forms';

/**
 * Directive that requires the control's value to be greater than or equal to the provided number.
 *
 * It basically exposes Angular's builtin `Validators.min()` to template-driven forms.
 *
 * Usage:
 * ```html
 * Enter a number greater than 5: <input type="number" [min]="'5'">
 * Enter a number greater than 10: <input type="number" min="10">
 * ```
 */
@Directive({
  selector: '[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator, OnInit {

  @Input() min: number;

  ngOnInit() {
    // Note: if using DOM attribute binding this.min will be a string here, not a number.
    // Validators.min() tolerates strings but I prefer not to rely on that implementation detail
    this.min = typeof this.min === 'string' ? Number(this.min) : this.min;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return Validators.min(this.min)(control);
  }
}
