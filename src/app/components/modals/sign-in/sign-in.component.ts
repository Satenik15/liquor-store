import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthResponseData } from '../../../services/registration.service';
import { LogInRequestModel } from 'src/app/models/ragistrationrequest.model';
import { ModalService } from 'src/app/services/modal.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../registration.modal.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  logInRequestModel: LogInRequestModel;
  resdata: AuthResponseData[] = [];
  singIn: boolean = false;

  constructor(
    private router: Router,
    private mdlSrvc: ModalService,
    private regSrv: RegistrationService,
    ) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, [ Validators.required, Validators.email ]),
      'password': new FormControl(null, Validators.required)
    })
  }

  onCloseSignInPopup() {
    this.mdlSrvc.closePopup();
  }

  onSignIn() {
    if(!this.signInForm.valid) {
      return;
    }
    let email = this.signInForm.get('email').value;
    let password = this.signInForm.get('password').value;
    this.logInRequestModel = { email, password };
    this.regSrv.logIn(email, password)
        this.signInForm.reset();
        this.singIn = true;
  }

  openSignUpPopup() {
    this.mdlSrvc.closePopup();
    this.mdlSrvc.openPopup(SignUpComponent);
  }

}
