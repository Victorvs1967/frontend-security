import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(public dialog: MatDialog, public http: HttpService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSignup() {
    this.router.navigate([environment.signup]);
  }

  onSignin() {
    this.http.signin(this.email.value, this.password.value).subscribe(data => {
      this.email.reset();
      this.password.reset();
      this.router.navigate([environment.user]);
    });
  }

}
