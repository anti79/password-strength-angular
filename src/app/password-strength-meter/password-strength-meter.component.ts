import { Component, Input } from '@angular/core';

export enum PasswordStrength {
	None,
	TooShort,
	Easy,
	Medium,
	Strong
}

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css']
})
export class PasswordStrengthMeterComponent {
	
	@Input()
	passwordStrength:PasswordStrength = PasswordStrength.None;
	
	getSectionClasses() {
		switch (this.passwordStrength) {
			case PasswordStrength.None: return ["strength-none","strength-none","strength-none"]
			case PasswordStrength.TooShort: return ["strength-easy","strength-easy","strength-easy"]
			case PasswordStrength.Easy: return ["strength-easy","strength-none","strength-none"]
			case PasswordStrength.Medium: return ["strength-medium","strength-medium","strength-none"]
			case PasswordStrength.Strong: return ["strength-strong","strength-strong","strength-strong"]
		}
		
	}



}
