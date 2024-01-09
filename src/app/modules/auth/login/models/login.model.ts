export interface Login {
  username: string;
  password: string;
}

export interface User {
  activated: boolean;
  firstName: string;
  lastName: string;
  role: Role;
  username: string;
}

export type Role = 'USER';
