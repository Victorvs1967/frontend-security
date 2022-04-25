import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  formGroup?: FormGroup;

  constructor(public http: HttpService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required ] ],
      firstName: [ '', null ],
      lastName: [ '', null ],
    })
  }

  onSignin() {
    this.router.navigate([environment.signin]);
  }

  onSignup(e: Event) {
    e.preventDefault();
    if (this.formGroup) {
      const user: UserDTO = new UserDTO(this.formGroup.controls.email.value, this.formGroup.controls.password.value, this.formGroup.controls.firstName.value, this.formGroup.controls.lastName.value);
      this.http.signup(user).subscribe(res => {
        this.message = 'User created successfully!';
        this.isSignup = true;
      }, error => {
        this.message = 'User not created!';
        this.isSignup = false;
      });
    }
  }
}