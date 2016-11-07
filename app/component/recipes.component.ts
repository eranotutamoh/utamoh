import { Component, OnInit } from '@angular/core';
import {RecName}  from '../abstract/recipename';
import {RecDetail}  from '../abstract/recipedetail';
import {Ingredients}  from '../abstract/ingredients';
import { Router } from '@angular/router';
import { RecApiService } from '../service/recipesapi.service';


@Component({
    selector: 'recipes',
    templateUrl: 'html/recipes.html',
    styles: [`
    .yo {
      background-color: greenyellow !important;
      color: white;
    } `],
})

export class RecListComp implements OnInit {

    ngOnInit(): void {
        this.getRecNames();
    }
    recipes: RecName[];
    constructor(private recNameService: RecApiService, private router: Router ) { }

    deleteRec(recipe: RecName): void {
        console.log(recipe._id, "Delete: ", recipe.name);

    };
    editRec(recipe: RecName): void {
        let link = ['/edit', recipe._id];
        this.router.navigate(link);
    }
    getRecNames() : void {
        this.recNameService.getRecNames().then(data => this.recipes = data);
    }
}

