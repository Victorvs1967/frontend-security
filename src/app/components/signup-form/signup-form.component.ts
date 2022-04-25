import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/models/userDTO.model';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  isSignup: boolean = false;

  message ?: string;

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  firstName = new FormControl('', null);
  lastName = new FormControl('', null);

  constructor(public http: HttpService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSignin() {
    this.router.navigate([environment.signin]);
  }

  onSignup(e: Event) {
    e.preventDefault();
    const user: UserDTO = new UserDTO(this.email.value, this.password.value, this.firstName.value, this.lastName.value);
    this.http.signup(user).subscribe(res => {
      this.message = 'User created successfully!';
      this.isSignup = true;
    }, error => {
      this.message = 'User not created!';
      this.isSignup = false;
    });
  }
}