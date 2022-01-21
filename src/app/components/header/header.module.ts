import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { HeaderComponent } from './header.component';

@NgModule({
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        AppRoutingModule,
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent
    ],
    providers: []
})

export class HeaderModule {}