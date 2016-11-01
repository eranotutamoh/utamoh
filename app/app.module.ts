import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './component/app.component';
import {RecLinkComp}  from './component/recipelink.component';


@NgModule({
    imports:      [ BrowserModule,
                    FormsModule],
    declarations: [ AppComponent,
                    RecLinkComp],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }

