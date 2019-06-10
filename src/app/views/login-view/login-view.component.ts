import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  showLogin: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onSwitchForms(): void {
    this.showLogin = !this.showLogin;
  }

}
