import { Component, Input } from '@angular/core';
import {RecDetail}  from '../abstract/recipedetail';
import {Ingredients}  from '../abstract/ingredients';
import { Router } from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AutoSearchService } from '../service/ingredientsuggest.service';
import { RecApiService } from '../service/recipesapi.service';

@Component({
    selector: 'rec-form',
    templateUrl: 'html/recipeform.html'
})

export class RecFormComp {

    @Input() recipe: RecDetail;

    private autoSuggest: Observable<string[]>;
    private subscription: Subscription;
    private model: RecDetail;
    private submitted = false;
    private dynamicIngredientList = [];
    private listUl;
    private ingIndex = 0;
    private focused: Array<Boolean>[];

    constructor(private recService: RecApiService, private router: Router, private autoSearchService: AutoSearchService) { }

    ngOnInit(): void {
        this.model = this.recipe || this.newRecipe();
        this.resetFocus();
        this.autoSuggest = this.autoSearchService.suggestedIngredients();
        this.subscription = this.autoSuggest.subscribe(result => { this.dynamicIngredientList = result });
        this.listUl = document.querySelector('#ingredients-ul');
    }

    prepareSearch(target, index) {
        this.autoSearchService.next('');
        this.listUl.style.top = target.offsetTop + 6 + 'px';
        this.listUl.style.left = target.offsetLeft + 'px';
        this.ingIndex = index;
    }
    search(event): void {
        this.autoSearchService.next(this.model.ingredients[this.ingIndex].name);
        if (event.keyCode == 13 && this.dynamicIngredientList[0]) this.completeSearch(this.dynamicIngredientList[0]);
    }
    completeSearch(ing) {
        this.model.ingredients[this.ingIndex].name = ing;
        this.focused[this.ingIndex] = [false,true];
        this.autoSearchService.next('');
    }

    addIngredient(): boolean {
        this.focused.push([true,false]);
        this.model.ingredients.push(new Ingredients('', ''));
        return false;
    }
    removeIngredient(ix): void {
        this.model.ingredients.splice(ix, 1);
        this.autoSearchService.next('');
        this.resetFocus();
        this.ingIndex = this.model.ingredients.length-1;
    };

    updateRecipe(): void {
        let link = ['/recipe', this.recipe._id];
        this.recService.update(this.model)
            .then(() => this.router.navigate(link));
    }
    addRecipe(): void {
        this.recService.create(this.model)
            .then(data => this.router.navigate(['/recipe', data._id]));
    }
    newRecipe(): RecDetail {
        let ings = [new Ingredients('', '','')]
        return new RecDetail('', ings, '');
    }
    resetFocus() {
        this.focused = [];
        for(let ing in this.model.ingredients ) {
            this.focused.push([false,false]);
        }
    }
    removeFocus(ix, el) {
        this.autoSearchService.next('');
        if(this.focused[ix]) this.focused[ix][el] = false;
    }
    onSubmit() {
        if (this.model._id) this.updateRecipe();
        else this.addRecipe();
        this.submitted = true;
    }
}