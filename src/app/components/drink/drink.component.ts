import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DrinkModel } from 'src/app/models/drink.model';
import { DrinkService } from 'src/app/services/drink.service';
import { NavbarService } from 'src/app/services/nabar.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  show: boolean = false;
  drink: string;
  drinkModel: DrinkModel;
  drinkModelArr: DrinkModel[];

  constructor(
    private cd: ChangeDetectorRef,
    private drinkSrvc: DrinkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.drink = this.route.snapshot.params['drink'];
    this.fetchPage();
    this.route.params
    .subscribe((params: Params) => {
      this.drink = params['drink'];
      this.fetchPage();
    })
  }

  fetchPage() {
    this.drinkSrvc.getAllDrinks()
    .subscribe(drinks => {
      if(drinks) {
        this.drinkModelArr = drinks;
        drinks.map(drink => {
         if(drink.title1.toLowerCase() === this.drink) {
           this.drinkModel = drink;
           this.cd.markForCheck();
         }
       })
      } 
    })
  }

}
