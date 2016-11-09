import { Component, Input } from '@angular/core';
import {RecDetail}  from '../abstract/recipedetail';
import {Ingredients}  from '../abstract/ingredients';
import { Router } from '@angular/router';
import { RecApiService } from '../service/recipesapi.service';

@Component({
    selector: 'rec-form',
    templateUrl: 'html/recipeform.html'
})

export class RecFormComp {

    @Input()
    recipe: RecDetail;

    ngOnInit(): void {
        this.model = this.recipe || this.newRecipe() ;
    }
    //ingredients: Ingredients[];
    model: RecDetail;
    submitted = false;

    constructor(private recService: RecApiService, private router: Router ) { }

    newRecipe() {
        let ings = [new Ingredients('','')]
        return new RecDetail('',ings,'');
    }
    addIngredient(): boolean {
        this.model.ingredients.push(new Ingredients('',''));
        return false;
    };
    removeIngredient(ix): boolean {
        this.model.ingredients.splice(ix,1);
        return false;
    };
    updateRecipe(): void {
        let link = ['/recipe', this.recipe._id];
        ;
        this.recService.update(this.model)
            .then(() => this.router.navigate(link));
    }
    addRecipe(): void {
        this.recService.create(this.model)
            .then(data => this.router.navigate(['/recipe', data._id]));
    }
    onSubmit() {
        if(this.model._id) this.updateRecipe();
        else this.addRecipe();
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}