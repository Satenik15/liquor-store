import { Component, OnInit } from '@angular/core';
import { NavbarModel } from 'src/app/models/navbar.model';
import { NavbarService } from 'src/app/services/nabar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  products: NavbarModel[];

  constructor(private navbarSrvc: NavbarService) { }

  ngOnInit(): void {
    this.navbarSrvc.getNavbar()
    .subscribe(item => {
      if(item) {
        this.products = item;
        this.products.map(product => {
          product.drink = product.drink.charAt(0).toUpperCase() + product.drink.slice(1); 
        })
      }
    });
  }

}
