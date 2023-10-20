import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-box',
  templateUrl: './password-box.component.html',
  styleUrls: ['./password-box.component.css']
})
export class PasswordBoxComponent {

  fieldType= "password";
  password = "";
  show = false;


  @Output()
  passwordChanged:EventEmitter<string> = new EventEmitter();
  onChange(password:string) {
	this.passwordChanged.emit(password);
  }
  
  onShowHideClick() {
    if (this.fieldType === 'password') {
      this.fieldType = 'text';
      this.show = true;
    } else {
      this.fieldType = 'password';
      this.show = false;
    }
  }
}
