import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { SignUpModule } from './components/modals/sign-up/sign-up.module';
import { SignInModule } from './components/modals/sign-in/sign-in.module';
import { CategoriesSectionModule } from './components/categories-section/categories-section.module';
import { ListingModule } from './components/listing/listing.module';
import { SvgSpriteIconModule } from './components/shared/svg-sprite-icon/svg-sprite-icon.module';
import { DrinkModule } from './components/drink/drink.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    CategoriesSectionModule,
    SignUpModule,
    SignInModule,
    ListingModule,
    SvgSpriteIconModule,
    DrinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
