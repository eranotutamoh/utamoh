import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule }   from './app-routing.module';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {RecLinkComp}     from './component/recipelink.component';
import { RecComp }   from './component/recipes.component';
import { RecSearchComp }   from './component/recipesearch.component';
import { RecDetailComp }   from './component/recipedetail.component';
import { RecNameService } from './service/recipenames.service';


@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    AppRoutingModule,
                    HttpModule
                    ],
    declarations: [ AppComponent,
                    RecLinkComp,
                    RecComp,
                    RecSearchComp,
                    RecDetailComp],
    providers:    [RecNameService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }

