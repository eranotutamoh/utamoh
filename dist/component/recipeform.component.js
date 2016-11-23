"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const recipedetail_1 = require('../abstract/recipedetail');
const ingredients_1 = require('../abstract/ingredients');
const router_1 = require('@angular/router');
const Observable_1 = require('rxjs/Observable');
const Subject_1 = require('rxjs/Subject');
const ingredientsuggest_service_1 = require('../service/ingredientsuggest.service');
const recipesapi_service_1 = require('../service/recipesapi.service');
let RecFormComp = class RecFormComp {
    constructor(recService, router, autoSearchService) {
        this.recService = recService;
        this.router = router;
        this.autoSearchService = autoSearchService;
        this.searchTerms = new Subject_1.Subject();
        this.submitted = false;
        this.dynamicIngredientList = [];
        this.ingIndex = 0;
    }
    ngOnInit() {
        this.model = this.recipe || this.newRecipe();
        this.resetFocus();
        this.autoSuggester();
        this.listUl = document.querySelector('#ingredients-ul');
    }
    prepareSearch(target, index) {
        this.searchTerms.next('');
        this.listUl.style.top = target.offsetTop + 6 + 'px';
        this.listUl.style.left = target.offsetLeft + 'px';
        this.ingIndex = index;
    }
    search(event) {
        this.searchTerms.next(this.model.ingredients[this.ingIndex].name);
        if (event.keyCode == 13 && this.dynamicIngredientList[0])
            this.completeSearch(this.dynamicIngredientList[0]);
    }
    completeSearch(ing) {
        this.model.ingredients[this.ingIndex].name = ing;
        this.focused[this.ingIndex] = [false, true];
        this.searchTerms.next('');
    }
    autoSuggester() {
        this.autoSuggest = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
            ? this.autoSearchService.ingredientSearch(term)
            : Observable_1.Observable.of([]))
            .catch(error => {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
        this.autoSuggest.subscribe(result => { this.dynamicIngredientList = result; });
    }
    addIngredient() {
        this.focused.push([true, false]);
        this.model.ingredients.push(new ingredients_1.Ingredients('', ''));
        return false;
    }
    removeIngredient(ix) {
        this.model.ingredients.splice(ix, 1);
        this.searchTerms.next('');
        this.resetFocus();
        this.ingIndex = this.model.ingredients.length - 1;
    }
    ;
    updateRecipe() {
        let link = ['/recipe', this.recipe._id];
        this.recService.update(this.model)
            .then(() => this.router.navigate(link));
    }
    addRecipe() {
        this.recService.create(this.model)
            .then(data => this.router.navigate(['/recipe', data._id]));
    }
    newRecipe() {
        let ings = [new ingredients_1.Ingredients('', '', '')];
        return new recipedetail_1.RecDetail('', ings, '');
    }
    resetFocus() {
        this.focused = [];
        for (let ing in this.model.ingredients) {
            this.focused.push([false, false]);
        }
    }
    removeFocus(ix, el) {
        this.searchTerms.next('');
        if (this.focused[ix])
            this.focused[ix][el] = false;
    }
    onSubmit() {
        if (this.model._id)
            this.updateRecipe();
        else
            this.addRecipe();
        this.submitted = true;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', recipedetail_1.RecDetail)
], RecFormComp.prototype, "recipe", void 0);
RecFormComp = __decorate([
    core_1.Component({
        selector: 'rec-form',
        templateUrl: 'html/recipeform.html'
    }), 
    __metadata('design:paramtypes', [recipesapi_service_1.RecApiService, router_1.Router, ingredientsuggest_service_1.AutoSearchService])
], RecFormComp);
exports.RecFormComp = RecFormComp;
//# sourceMappingURL=recipeform.component.js.map