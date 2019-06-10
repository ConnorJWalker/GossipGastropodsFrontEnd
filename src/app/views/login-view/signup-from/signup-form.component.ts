import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['../login-view.component.css']
})
export class SignupFormComponent implements OnInit {
  @Output() switchForms: EventEmitter<void> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onGoToLoginClick(): void {
    this.switchForms.emit();
  }

}
