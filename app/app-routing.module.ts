import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecListComp }   from './component/recipes.component';
import { RecSearchComp }   from './component/recipesearch.component';
import { RecDetailComp }   from './component/recipedetail.component';
import { RecAddComp }   from './component/recipeadd.component';
import { RecEditComp }   from './component/recipeedit.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: RecListComp
    },
    {
        path: 'search',
        component: RecSearchComp
    },
    {
        path: 'recipe/:id',
        component: RecDetailComp
    },
    {
        path: 'edit/:id',
        component: RecEditComp
    },
    {
        path: 'recipeadd',
        component: RecAddComp
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

