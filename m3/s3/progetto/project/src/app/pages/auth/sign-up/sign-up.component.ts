import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { SignUpData } from 'src/app/pages/auth/interfaces/sign-up-data';

@Component({
  selector: 'ngbd-alert-closeable',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  @ViewChild('f', {static:true}) form!:NgForm;

  allUser:any;

  data:SignUpData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  };

  constructor(private authSvc:AuthService) {}

  register() {
    this.authSvc.signUp(this.data).subscribe(res => console.log(res));

    this.form!.reset();
  }

  alert() {
      let boxAlert = <HTMLElement> document.getElementById('box-alert');
      let newAlert = <HTMLElement> document.createElement('ngb-alert');
      newAlert.appendChild(document.createTextNode('Successful registration!'));
      boxAlert.appendChild(newAlert);
  }

}
