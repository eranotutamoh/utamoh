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
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
const Subject_1 = require("rxjs/Subject");
// Return suggested list of ingredients given partial search string
let AutoSearchService = class AutoSearchService {
    constructor(http) {
        this.http = http;
        this.searchTerms = new Subject_1.Subject();
    }
    ingredientSearch(term) {
        return this.http
            .get(`api/ingredients?ing=${term}`)
            .map((r) => JSON.parse(r["_body"]));
    }
    suggestedIngredients() {
        return this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
            ? this.ingredientSearch(term)
            : Observable_1.Observable.of([]))
            .catch(error => {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    }
    next(term) {
        this.searchTerms.next(term);
    }
};
AutoSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AutoSearchService);
exports.AutoSearchService = AutoSearchService;
//# sourceMappingURL=ingredientsuggest.service.js.map