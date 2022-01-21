import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DrinkComponent } from "./components/drink/drink.component";
import { CategoriesSectionComponent } from "./components/categories-section/categories-section.component";
import { ListingComponent } from "./components/listing/listing.component";

const AppRoutes: Routes = [
    { path: '', component: CategoriesSectionComponent },
    { path: 'listing', component: ListingComponent },
    { path: ':drink', component: DrinkComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }