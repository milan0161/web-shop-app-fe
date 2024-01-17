export interface Register {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  userContactInfo: UserContactInfo;
}

export interface UserContactInfo {
  email: string;
  contactPhone: string;
}
