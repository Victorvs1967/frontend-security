import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/userDTO.model';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user?: UserDTO;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.http.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
