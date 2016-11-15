import { Component } from '@angular/core';
@Component({
    selector: 'recipes-app',
    template: `
        <nav>
            <a routerLink="/recipes">Recipes</a>
            <a routerLink="/search">Search</a>
            <a routerLink="/recipeadd">Add Recipe</a>
        </nav>
        <router-outlet></router-outlet>                
        `
})
export class AppComponent {
    title = 'Recipe Database';
}