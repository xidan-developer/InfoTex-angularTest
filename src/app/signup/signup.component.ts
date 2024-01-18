import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {
  constructor(private authService: AuthService) {

  }

  signUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password);
  }
}
