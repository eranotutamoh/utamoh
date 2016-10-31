import { Component, Input, Output, EventEmitter } from '@angular/core';

export class RecipeName {
    _id: string;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'html/recipes.html',
    styles: [`
    .yo {
      background-color: orange !important;
      color: white;
    } `]

})

export class AppComponent {
    title = 'Recipe';
    recipes = MOCKLIST;
    name: string;
    selectedRecipe: RecipeName;
    constructor() {
        this.name = 'Virgil Hanover';
    }
    logIndex(idx) {
        console.log('Recipe', this.recipes[idx]._id, this.recipes[idx].name);
        this.onSelect(this.recipes[idx]);
    };
    onSelect(recipe: RecipeName): void {
        this.selectedRecipe = recipe;
    }
}

const MOCKLIST: RecipeName[] = [{"_id":"57e32a7ac5ff5d0f0047d8d0","name":"Arab Spring Salad"},{"_id":"57c3f8772ff8260f00cb266a","name":"Artichoke + Green Bean Salad"},{"_id":"57bc16398671a10f0068a740","name":"Asparagus & Orange Salad with Panko Haloumi"},{"_id":"57bc188d8671a10f0068a777","name":"Asparagus w/ Roasted Sesame Dressing"} ];