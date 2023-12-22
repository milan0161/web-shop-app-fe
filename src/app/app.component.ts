import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options: string[] = ['male', 'female'];
  form = this.fb.group({
    firstname: [''],
    lastname: [],
    email: [''],
    password: [''],
    repeat_password: [''],
    gender: ['Select an option'],
  });
  constructor(private fb: FormBuilder) {}

  checkValues() {
    console.log(this.form.value);
  }
}
