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
const recipenames_service_1 = require('../service/recipenames.service');
let RecComp = class RecComp {
    constructor(recNameService) {
        this.recNameService = recNameService;
        this.title = 'Recipe';
        this.name = 'Virgil Hanover';
    }
    ngOnInit() {
        this.getRecNames();
    }
    logIndex(idx) {
        console.log('Recipe', this.recipes[idx]._id, this.recipes[idx].name);
        this.onSelect(this.recipes[idx]);
    }
    ;
    onSelect(recipe) {
        this.selectedRecipe = recipe;
    }
    getRecNames() {
        this.recNameService.getRecNames().then(data => this.recipes = data);
    }
};
RecComp = __decorate([
    core_1.Component({
        selector: 'recipes',
        templateUrl: 'html/recipes.html',
        styles: [`
    .yo {
      background-color: greenyellow !important;
      color: white;
    } `],
    }), 
    __metadata('design:paramtypes', [recipenames_service_1.RecNameService])
], RecComp);
exports.RecComp = RecComp;
//# sourceMappingURL=recipes.component.js.map