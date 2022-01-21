import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { CategoriesSectionComponent } from "./categories-section.component";

@NgModule({
    declarations: [
        CategoriesSectionComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
    ],
    exports: [
        CategoriesSectionComponent
    ]
})

export class CategoriesSectionModule {}