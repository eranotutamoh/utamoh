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
const router_1 = require('@angular/router');
const Observable_1 = require('rxjs/Observable');
const Subject_1 = require('rxjs/Subject');
const ingredientsuggest_service_1 = require('../service/ingredientsuggest.service');
let RecSearchComp = class RecSearchComp {
    constructor(autoSearchService, router) {
        this.autoSearchService = autoSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
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
    }
    searchRecipes(ingredient, input) {
        console.log('::', ingredient);
        this.userText = "";
        this.search('');
        input.focus();
    }
};
RecSearchComp = __decorate([
    core_1.Component({
        selector: 'rec-search',
        templateUrl: `html/search.html`
    }), 
    __metadata('design:paramtypes', [ingredientsuggest_service_1.AutoSearchService, router_1.Router])
], RecSearchComp);
exports.RecSearchComp = RecSearchComp;
//# sourceMappingURL=recipesearch.component.js.map