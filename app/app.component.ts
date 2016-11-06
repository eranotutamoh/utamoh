import { Component } from '@angular/core';
@Component({
    selector: 'recipes-app',
    template: `
        <nav>
            <a routerLink="/recipes">Recipes</a>
            <a routerLink="/search">Search</a>
            <a routerLink="/recipeadd">Add Recipe</a>
        </nav>
        <section class=mid>
            <h1>{{title}}</h1>
            <router-outlet></router-outlet>            
        </section>
        <section class=right></section>
            
      `
})
export class AppComponent {
    title = 'Recipe Database';
}