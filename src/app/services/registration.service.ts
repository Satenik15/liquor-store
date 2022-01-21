import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { LogInRequestModel, SignUpRequestModel } from "../models/ragistrationrequest.model";
import { Router } from "@angular/router";
import { ModalService } from "./modal.service";

export interface AuthResponseData {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    isLoggedIn?: boolean;
}

@Injectable({providedIn: 'root'})
export class RegistrationService {
    username: string;
    email: string;
    isLoddegIn: boolean;
    user: AuthResponseData = {};

    constructor(
        private http: HttpClient,
        private router: Router,
        private mdlSrvc: ModalService
        ) {}

    signUp(body: SignUpRequestModel) {
        this.http.post<AuthResponseData>('http://localhost:3000/users', body).subscribe(newUser => newUser)
    }

    logIn(email: string, password: string) {
        this.http.get<AuthResponseData[]>('http://localhost:3000/users')
        .subscribe(resdata => {
            resdata.map(data => {
              if(data.email === email && data.password === password) {
                this.mdlSrvc.closePopup();
                this.router.navigate(['/listing']);
                this.user.email = data.email;
                this.user.username = data.username;
                this.user.isLoggedIn = data.isLoggedIn;
                window.localStorage.setItem('user', JSON.stringify(this.user));
              }
            })
          })
    }

    logOut() {
      window.localStorage.removeItem('user');
    }
}