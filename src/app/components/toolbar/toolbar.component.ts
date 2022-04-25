import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public http: HttpService, private router: Router) { }

  ngOnInit(): void {}

  isSignin(): boolean { 
    return this.http.isSignin();
  }

  logout() {
    this.http.logout();
    this.router.navigate([environment.signin])
  }

}
