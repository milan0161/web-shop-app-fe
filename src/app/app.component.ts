import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = this.fb.group({
    firstname: [''],
    lastname: [
      {
        value: '',
        // disabled: true,
      },
    ],
    email: [''],
    password: [''],
    repeat_password: [''],
  });
  constructor(private fb: FormBuilder) {}

  checkValues() {
    console.log(this.form.value);
  }
}
