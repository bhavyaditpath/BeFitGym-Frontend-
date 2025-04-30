import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { InputfieldsComponent } from '../shared/commonComponent/Component/inputfields/inputfields.component';

@Component({
  selector: 'app-templetedrivenform',
  imports: [FormsModule, InputfieldsComponent, CommonModule],
  templateUrl: './templetedrivenform.component.html',
  styleUrl: './templetedrivenform.component.css',
})
export class TempletedrivenformComponent {
  userData = {
    firstName: '',
    lastName: '',
  };

  onSubmit(form: NgForm) {

     if (form.valid) {
       console.log('Form Value:', form.value);
       // proceed with submission
     } else {
       console.warn('Form is invalid. Please correct the errors.');
     }
  }
}
