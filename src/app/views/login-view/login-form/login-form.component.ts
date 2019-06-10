import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginRequest } from 'src/app/models/requests/auth/login-request';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login-view.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() switchForms: EventEmitter<void> = new EventEmitter;
  loginRequest: LoginRequest = new LoginRequest();

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  onGoToSignupClick(): void {
    this.switchForms.emit();
  }

  onSubmit() {
    this.authService.sendLoginRequest(this.loginRequest).subscribe(res => User.saveToken(res.token));
  }

}
