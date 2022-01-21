import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up.component';

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SignUpComponent
    ]
})

export class SignUpModule {} 