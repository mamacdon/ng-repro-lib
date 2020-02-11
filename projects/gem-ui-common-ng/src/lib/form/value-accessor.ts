import { forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Extend this class to implement a custom form control that integrates with
 * Angular forms.
 *
 * reference: https://stackoverflow.com/questions/34948961/angular-2-custom-form-input/37786142#37786142
 */
export abstract class AbstractValueAccessor implements ControlValueAccessor {
    private _value: any = '';
    writeValue(value: any) {
      this._value = value;
      this.onChange(value);
    }

    registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
    }

    private onChange = (_: any) => {};
    private onTouched = () => {};

    get value(): any {
      return this._value;
    }

    set value(v: any) {
      if (v !== this._value) {
        this._value = v;
        this.onChange(v);
      }
    }
}

export function makeProvider(type: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}
