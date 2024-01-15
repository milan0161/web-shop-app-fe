export interface Login {
  username: string;
  password: string;
}

export interface LoginResponse {
  activated: boolean;
  firstName: string;
  lastName: string;
  role: Role;
  username: string;
}

export type Role = 'USER';
