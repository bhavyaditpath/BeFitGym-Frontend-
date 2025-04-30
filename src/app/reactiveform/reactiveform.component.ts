import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { InputfieldsComponent } from '../shared/commonComponent/Component/inputfields/inputfields.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [InputfieldsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css',
})
export class ReactiveformComponent {
  myForm!: FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.myForm.valid) {
      console.log('Form Value:', this.myForm.value);
      // Reset form if needed:
      // this.myForm.reset();
      // this.isSubmitted = false;
    } else {
      console.warn('Form is invalid.');
    }
  }
}
