import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple',
  standalone: false,
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css',
})
export class SimpleComponent implements OnInit {
  simpleForm!: FormGroup; // Define the form group
  simpleModel: SimpleModel = new SimpleModel(); // Create an instance of the model

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.simpleForm = this.fb.group({
      firstName: [this.simpleModel.firstName], // Default value is an empty string
      lastName: [this.simpleModel.lastName],
    });
  }

  onSubmit(): void {
    console.log(this.simpleModel); // Output the form values when submitted
  }
}

class SimpleModel {
  firstName: string = '';
  lastName: string = '';
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
  }
}
