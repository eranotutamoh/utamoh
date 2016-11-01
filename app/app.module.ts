import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import {RecLinkComp}     from './component/recipelink.component';
import { RecComp }   from './component/recipes.component';
import { RecSearchComp }   from './component/recipesearch.component';
import { RecNameService } from './service/recipenames.service';


@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    RouterModule.forRoot([
                    {
                        path: 'recipes',
                        component: RecComp
                    },
                    {
                        path: 'search',
                        component: RecSearchComp
                    }
                    ])],
    declarations: [ AppComponent,
                    RecLinkComp,
                    RecComp,
                    RecSearchComp],
    providers:    [RecNameService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }

