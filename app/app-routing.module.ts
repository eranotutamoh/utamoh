import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecComp }   from './component/recipes.component';
import { RecSearchComp }   from './component/recipesearch.component';
import { RecDetailComp }   from './component/recipedetail.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecComp
    },
    {
        path: 'search',
        component: RecSearchComp
    },
    {
        path: 'recipe/:id',
        component: RecDetailComp
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

