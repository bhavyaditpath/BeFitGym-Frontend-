import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core';

import {
  ControlContainer,
  FormControl,
  NgControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormGroupDirective,
  FormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { inject } from '@angular/core';
// this code is used to create a custom validator for Angular forms. It checks if the input value is empty or contains only whitespace characters. If it does, it returns an error object; otherwise, it returns null, indicating that the input is valid.
// this should bee in another component file
// but for simplicity we are keeping it here.
export function noWhitespaceValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (control.value && control.value.trim().length === 0) {
    return { whitespace: 'Input cannot be blank or just spaces' };
  }
  return null;
}

@Component({
  selector: 'app-inputfields',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inputfields.component.html',
  styleUrls: ['./inputfields.component.css'],
  //This code registers InputfieldsComponent as a custom form control in Angular, allowing it to be used with [(ngModel)] or formControlName). It ensures that Angular knows how to read/write values and handle form control interactions for this component.
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: InputfieldsComponent,
  //     multi: true,
  //   },
  // ],
})
export class InputfieldsComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string | number | null = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() id: string = '';
  @Input() isSubmitted: boolean = false;
  @Input() customError: string = '';
  @Input() customErrors: { key: string; message: string }[] = [];
  @Output() valueChange = new EventEmitter<string | number | null>();
  @Input() autofocus: boolean = false;

  control: FormControl | null = null;

  private onChange: (value: string | number | null) => void = () => {};

  private onTouched: () => void = () => {};

  // ngControl = inject(NgControl, { optional: true, self: true });
  // controlContainer = inject(ControlContainer, { optional: true });

  // @Optional(): Marks a dependency as optional, meaning Angular won’t throw an error if it's not provided.
  // @Self(): Instructs Angular to look for the dependency only within the component itself, not in parent or ancestor components.
  constructor(
    // i can also use injector: Injector to get the controlContainer and ngControl
    // but for simplicity we are using @Optional() and @Self() decorators to inject the dependencies.
    @Optional() @Self() public ngControl?: NgControl,
    @Optional() private controlContainer?: ControlContainer
  ) {
    // This code sets the value accessor for the ngControl to this component, allowing Angular to use this component as a form control.
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (!this.id) {
      this.id = `input-${Math.random().toString(36).substring(2, 9)}`;
    }

    // below code check if the form is reactive or template driven
    if (this.ngControl) {
      this.control = this.ngControl.control as FormControl;
      // Add custom validator for whitespace check
      if (this.control) {
        this.control.setValidators([noWhitespaceValidator]);
      }
    } else if (
      this.controlContainer &&
      this.controlContainer instanceof FormGroupDirective
    ) {
      const formGroup = this.controlContainer.form;
      if (formGroup) {
        const controlName = this.id;
        this.control = formGroup.get(controlName) as FormControl;
      }
    }
  }

  // SimpleChanges is a way for your component to react when input values change, by showing you what changed and how.
  // for every @input() property, Angular creates a SimpleChange object that contains the previous and current value of the property.
  // This allows you to compare the previous and current values of the property and take action accordingly.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isSubmitted']) {
      this.updateValidity();
    }
  }

  //The primary purpose of the updateValidity() method is to ensure that the validation status of the input is up-to-date.
  private updateValidity() {
    if (this.control) {
      // check this field again and update whether it's valid or not.
      this.control.updateValueAndValidity();
    }
  }
  // we are using this method to set the value of the input field when the form is submitted.
  // This method is called when the form is submitted, and it sets the value of the input field to the value of the control.
  writeValue(obj: string | number | null): void {
    this.value = obj;
  }
  registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onValueChange(newValue: any): void {
    this.value = newValue;
    this.onChange(newValue);
    this.onTouched();
    this.valueChange.emit(newValue);
  }
}
