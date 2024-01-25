import { Register } from '../../auth/register/models/register.model';
export type OrderUser = Omit<Register, 'password'>;
