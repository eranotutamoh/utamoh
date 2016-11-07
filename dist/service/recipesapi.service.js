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
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let RecApiService = class RecApiService {
    constructor(http) {
        this.http = http;
        this.recipeNamesUrl = 'api/recipes';
        this.recipeDetailUrl = 'api/recipe/';
        this.recipeUpdateUrl = 'api/recipeedit/';
        this.recipeAddUrl = 'api/recipeadd';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getRecNames() {
        return this.http.get(this.recipeNamesUrl)
            .toPromise()
            .then(response => JSON.parse(response["_body"]))
            .catch(this.handleError);
    }
    getRecDetail(id) {
        return this.http.get(`${this.recipeDetailUrl}${id}`)
            .toPromise()
            .then(response => JSON.parse(response["_body"]))
            .catch(this.handleError);
    }
    update(recipe) {
        const url = `${this.recipeUpdateUrl}${recipe._id}`;
        return this.http
            .put(url, JSON.stringify(recipe), { headers: this.headers })
            .toPromise()
            .then(() => recipe)
            .catch(this.handleError);
    }
    create(recipe) {
        return this.http
            .post(this.recipeAddUrl, JSON.stringify(recipe), { headers: this.headers })
            .toPromise()
            .then(response => JSON.parse(response["_body"]))
            .catch(this.handleError);
    }
};
RecApiService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], RecApiService);
exports.RecApiService = RecApiService;
//# sourceMappingURL=recipesapi.service.js.map