import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { LoginData } from './interfaces/login-data';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  faAt = faAt;
  faLock = faLock;
  faUser = faUser;

  data:LoginData = {
    email: '',
    password: ''
  }

}
