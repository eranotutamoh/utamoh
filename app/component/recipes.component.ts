import { Component, OnInit } from '@angular/core';
import {RecName}  from '../abstract/recipename';
import {RecLinkComp}  from './recipelink.component';
import { RecNameService } from '../service/recipenames.service';


@Component({
    selector: 'recipes',
    templateUrl: 'html/recipes.html',
    styles: [`
    .yo {
      background-color: greenyellow !important;
      color: white;
    } `],
})

export class RecComp implements OnInit {

    ngOnInit(): void {
        this.getRecNames();
    }
    title = 'Recipe';
    recipes: RecName[];
    name: string;
    selectedRecipe: RecName;
    constructor(private recNameService: RecNameService ) {
        this.name = 'Virgil Hanover';
    }
    logIndex(idx) {
        console.log('Recipe', this.recipes[idx]._id, this.recipes[idx].name);
        this.onSelect(this.recipes[idx]);
    };
    onSelect(recipe: RecName): void {
        this.selectedRecipe = recipe;
    }
    getRecNames() : void {
        this.recNameService.getRecNames().then(data => this.recipes = data);
    }
}

