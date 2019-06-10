import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login-view.component.css']
})
export class LoginFormComponent implements OnInit {
  @Output() switchForms: EventEmitter<void> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onGoToSignupClick(): void {
    this.switchForms.emit();
  }

}
