import { Component } from '@angular/core';
import { PasswordStrength } from './password-strength-meter/password-strength-meter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	passwordStrength:PasswordStrength = PasswordStrength.None;
    onPasswordChanged(password:string) {

		let hasLetters = /[a-zA-Z]/.test(password);
		let hasDigits = /\d/.test(password);;
		let hasSymbols = /[^a-zA-Z0-9]/.test(password);
		let strengthIndex = (hasLetters ? 1 : 0) + (hasDigits ? 1 : 0) + (hasSymbols ? 1 : 0);

		if(password.length==0) {
			this.passwordStrength = PasswordStrength.None;
			return;
		}
		else if(password.length > 0 && password.length < 8) {
			this.passwordStrength = PasswordStrength.TooShort;
			return;
		}
		else if( strengthIndex === 1 ) {
			this.passwordStrength = PasswordStrength.Easy;
		}
		else if(strengthIndex === 2) {
			this.passwordStrength = PasswordStrength.Medium
		}
		else if(strengthIndex === 3) {
			this.passwordStrength = PasswordStrength.Strong;
		}
    }
}
