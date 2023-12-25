import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SelectInput } from './modules/shared/custom/models/select-element.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options: SelectInput[] = [
    { value: 'male', id: 1 },
    { value: 'female', id: 2 },
    { value: 'other', id: 3 },
  ];
  form = this.fb.group({
    firstname: [],
    lastname: [],
    email: [],
    password: [],
    repeat_password: [],
    gender: ['Select an option'],
  });
  constructor(private fb: FormBuilder) {}

  checkValues() {
    console.log(this.form.value);
  }
}
