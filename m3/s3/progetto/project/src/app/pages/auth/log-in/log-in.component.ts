import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginData } from '../interfaces/login-data';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  @ViewChild('f', {static:true}) form!:NgForm;

  data:LoginData = {
    email: '',
    password: ''
  }

  constructor(private authSvc:AuthService) {}

  login() {
    this.authSvc.login(this.data).subscribe(accessData => {
      alert(`Sei loggato come ${accessData.user.name} ${accessData.user.surname}`);
    })

    this.form!.reset();
  }

}
