import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule }   from './app-routing.module';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {RecLinkComp}     from './component/recipelink.component';
import { RecListComp }   from './component/recipes.component';
import { RecSearchComp }   from './component/recipesearch.component';
import { RecDetailComp }   from './component/recipedetail.component';
import { RecFormComp }   from './component/recipeform.component';
import { RecEditComp }   from './component/recipeedit.component';
import { RecAddComp }   from './component/recipeadd.component';
import { RecApiService } from './service/recipesapi.service';


@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    AppRoutingModule,
                    HttpModule
                    ],
    declarations: [ AppComponent,
                    RecLinkComp,
                    RecListComp,
                    RecSearchComp,
                    RecDetailComp,
                    RecFormComp,
                    RecEditComp,
                    RecAddComp],
    providers:    [RecApiService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }

