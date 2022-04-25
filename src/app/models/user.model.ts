import { Roles } from "./roles.model";

export interface User {

  email: string;
  password: string;
  firstName: string;
  lastName: string;
  onCreate: number;
  onUpdate: number;
  role: Roles;
  
}