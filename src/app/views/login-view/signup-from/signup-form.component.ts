import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SignupRequest } from '../../../models/requests/auth/signup-request';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['../login-view.component.css']
})
export class SignupFormComponent implements OnInit {
  @Output() switchForms: EventEmitter<void> = new EventEmitter;
  signupRequest: SignupRequest = new SignupRequest();

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  onGoToLoginClick(): void {
    this.switchForms.emit();
  }

  onSubmit() {
    this.authService.sendSignupRequest(this.signupRequest).subscribe(res => User.saveToken(res.token));
  }

}
