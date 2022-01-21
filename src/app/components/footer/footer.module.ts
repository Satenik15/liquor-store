import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FooterComponent } from "./footer.component";
import { SvgSpriteIconModule } from "../shared/svg-sprite-icon/svg-sprite-icon.module";

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        SvgSpriteIconModule
    ],
    exports: [
        FooterComponent
    ]
})

export class FooterModule {}