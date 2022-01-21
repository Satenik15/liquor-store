import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { ModalService } from 'src/app/services/modal.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { SignUpComponent } from '../modals/sign-up/sign-up.component';
import { SignInComponent } from '../modals/sign-in/sign-in.component';
import { DrinkService } from 'src/app/services/drink.service';
import { DrinkModel } from 'src/app/models/drink.model';
import { NavbarService } from 'src/app/services/nabar.service';
import { NavbarModel } from 'src/app/models/navbar.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // drinks = ['brandy', 'whisky', 'vodka', 'tequila', 'rum', 'sherry', 'aperitif', 'liqueur'];
  drinks: NavbarModel[];
  drinkModel: DrinkModel;
  openDropDown: boolean = false;

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private mdlSrvc: ModalService,
    private regSrvc: RegistrationService,
    private drinkSrvc: DrinkService,
    private navbarSrvc: NavbarService
  ) { }

  get isLoggedIn() {
    if(window.localStorage.getItem('user')) {
      return JSON.parse(window.localStorage.getItem('user')).isLoggedIn;
    }
  }

  ngOnInit(): void {
    this.navbarSrvc.getNavbar()
    .subscribe(items => {
      this.drinks = items;
    })
  }

  openSignUpPopup(){
    this.mdlSrvc.openPopup(SignUpComponent);
  }

  openSignInPopup() {
    this.mdlSrvc.openPopup(SignInComponent);
  }

  onLogOut () {
    this.regSrvc.logOut();
    this.router.navigate(['']);
  }

  openCloseDropDown() {
    this.openDropDown = !this.openDropDown;
  }
}
