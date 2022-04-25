import { Roles } from "./roles.model";
import { User } from "./user.model";

export class UserDTO implements User {

  email: string;
  password: string;
  firstName: string;
  lastName: string;
  onCreate: number = 0;
  onUpdate: number = 0;
  role: Roles = Roles.USER;

  constructor(email: string, password: string, firstName: string | '', lastName: string | '') {
    
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}