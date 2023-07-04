import { Role } from './role';

export class Cleark {
  id!: number;
  userName!: string; // This is the username that the user will use to login
  password!: string; // This is the password that the user will use to login
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  address!: string;
  role!: Role;
  token?: string;
}
