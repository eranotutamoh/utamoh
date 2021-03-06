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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const ingredientsuggest_service_1 = require("../service/ingredientsuggest.service");
const recipesapi_service_1 = require("../service/recipesapi.service");
let RecSearchComp = class RecSearchComp {
    constructor(recService, autoSearchService, router) {
        this.recService = recService;
        this.autoSearchService = autoSearchService;
        this.router = router;
        this.searchParameters = [];
        this.dynamicIngredientList = [];
    }
    ngOnInit() {
        this.searchInput = document.querySelector('#search-box');
        this.autoSuggest = this.autoSearchService.suggestedIngredients();
        this.subscription = this.autoSuggest.subscribe(result => this.autoSelect(result));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    search(term, keyPressed) {
        this.autoSearchService.next(term);
        if (keyPressed == 13 && this.dynamicIngredientList[0])
            this.searchRecipes(this.dynamicIngredientList[0]);
    }
    autoSelect(list) {
        this.dynamicIngredientList = list;
        if (this.dynamicIngredientList.length == 1)
            this.searchRecipes(this.dynamicIngredientList[0]);
    }
    searchRecipes(ingredient) {
        let searchString = this.formatSearch(ingredient);
        this.getRecNames(searchString);
        this.autoSearchService.next('');
        this.searchInput.value = '';
        this.searchInput.focus();
    }
    formatSearch(ingredient) {
        let searchString = '';
        this.searchParameters.push(ingredient);
        let j = 2;
        for (let i = 0; i < this.searchParameters.length; i++) {
            let par = (i == 0) ? '?ing1=' : '&ing' + j++ + '=';
            searchString += par + this.searchParameters[i];
        }
        return searchString;
    }
    getRecNames(searchString) {
        this.recService.getRecBySearch(searchString).then(data => this.recipes = data);
    }
    clear() {
        this.searchParameters.length = 0;
        this.recipes = [];
        this.searchInput.value = '';
    }
};
RecSearchComp = __decorate([
    core_1.Component({
        selector: 'rec-search',
        templateUrl: `html/search.html`
    }),
    __metadata("design:paramtypes", [recipesapi_service_1.RecApiService, ingredientsuggest_service_1.AutoSearchService, router_1.Router])
], RecSearchComp);
exports.RecSearchComp = RecSearchComp;
//# sourceMappingURL=recipesearch.component.js.map