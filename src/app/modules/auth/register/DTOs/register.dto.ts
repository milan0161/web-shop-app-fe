export class RegisterDto {
  static toRegisterDto(registerForm: any): Register {
    return {
      username: registerForm.username,
      password: registerForm.password,
      firstName: registerForm.firstName,
      lastName: registerForm.lastName,
      userContactInfo: {
        email: registerForm.userContactInfo.email,
        contactPhone: registerForm.userContactInfo.contactPhone,
      },
    };
  }
}

interface Register {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  userContactInfo: {
    email: string;
    contactPhone: string;
  };
}
