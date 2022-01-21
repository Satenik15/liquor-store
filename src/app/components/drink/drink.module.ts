import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DrinkComponent } from "./drink.component";

@NgModule({
    declarations: [
        DrinkComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DrinkComponent
    ]
})

export class DrinkModule { }