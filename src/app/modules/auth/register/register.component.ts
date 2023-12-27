import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userContactInfo: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        contactPhone: new FormControl('', [Validators.required]),
      }),
    },
    { updateOn: 'blur' }
  );

  register() {
    console.log(this.registerForm.value);
  }

  checkInputs(formControlElement: string[]) {
    return (
      this.registerForm.get(formControlElement)?.invalid &&
      (this.registerForm.get(formControlElement)?.dirty ||
        this.registerForm.get(formControlElement)?.touched)
    );
  }
}
