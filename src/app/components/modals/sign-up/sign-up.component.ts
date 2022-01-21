import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpRequestModel } from 'src/app/models/ragistrationrequest.model';
import { ModalService } from 'src/app/services/modal.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { SignInComponent } from '../sign-in/sign-in.component';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../registration.modal.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup; 
  invalidUsername: string;
  signUpRequestModel: SignUpRequestModel  = {};
  regexForUsername: string = "^[a-zA-Z0-9]+$";

  constructor(private mdlSrvc: ModalService, private regSrv: RegistrationService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [ Validators.required, Validators.minLength(6), Validators.pattern("^[a-zA-Z0-9]+$") ]),
      'email': new FormControl(null, [ Validators.required, Validators.email ]),
      'password': new FormControl(null, [ Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) ]),
      'confirmPassword': new FormControl(null, Validators.required)
    })
  }

  onCloseSignUpPopup() {

    this.mdlSrvc.closePopup();
  }

  onSignUp() {
    if(!this.signUpForm.valid) {
      return;
    }
    let username = this.signUpForm.get('username').value;
    let email = this.signUpForm.get('email').value;
    let password = this.signUpForm.get('password').value;
    let confirmPassword = this.signUpForm.get('confirmPassword').value;
    let isLoggedIn = true;
    if(password === confirmPassword) {
      this.signUpRequestModel = {username, email, password, isLoggedIn};
      this.regSrv.signUp(this.signUpRequestModel);
      this.signUpForm.reset();
      this.mdlSrvc.closePopup();
      this.mdlSrvc.openPopup(SignInComponent);
    }
  }

  openSignInPopup() {
    this.mdlSrvc.closePopup();
    this.mdlSrvc.openPopup(SignInComponent);
  }

}
