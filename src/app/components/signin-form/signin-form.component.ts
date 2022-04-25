import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  message?: string;
  formGroup?: FormGroup;

  constructor(public http: HttpService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required ] ]
    });
  }

  onSignup() {
    this.router.navigate([environment.signup]);
  }

  onSignin() {
    if (this.formGroup) {
      this.http.signin(this.formGroup.controls['email'].value, this.formGroup.controls['password'].value).subscribe(data => {
        if (this.formGroup) {
          this.formGroup.controls['email'].reset();
          this.formGroup.controls['password'].reset();
          this.router.navigate([environment.user]);
        }
      });
    }
  }

}
