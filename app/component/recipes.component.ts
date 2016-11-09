import { Component, OnInit } from '@angular/core';
import {RecName}  from '../abstract/recipename';
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
    constructor(private recService: RecApiService, private router: Router ) { }

    deleteRec(recipe: RecName, ix: number): boolean {
        if(!window.confirm('Delete '+recipe.name+'? '+ix)) return false;
        this.recService
            .delete(recipe._id)
            .then(() => {this.recipes.splice(ix,1); });
    };
    editRec(recipe: RecName): void {
        let link = ['/edit', recipe._id];
        this.router.navigate(link);
    }
    getRecNames() : void {
        this.recService.getRecNames().then(data => this.recipes = data);
    }
}

