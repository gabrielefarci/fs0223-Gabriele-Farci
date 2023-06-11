import { User } from './../auth/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  allUser:any;

  data:User = {
    id: 0,
    email: '',
    name: '',
    surname: ''
  }

  constructor(private authSvc:AuthService) {}

  ngOnInit(): void {
    this.authSvc.getAllUser('http://localhost:3000/users').subscribe(data => {
      this.allUser = data;
      console.log(this.allUser);
    })
  }

}
