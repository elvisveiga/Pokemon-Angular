import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PaginationModule  } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RouterModule, Routes, Router } from '@angular/router';
import { routing } from './app.routes';

import { Util } from './_helper/util';

import { PokemonService } from './_services/pokemon.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    routing,
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    Util,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
