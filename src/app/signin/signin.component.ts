import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent {
  constructor(private authService: AuthService) {

  }

  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }
}
