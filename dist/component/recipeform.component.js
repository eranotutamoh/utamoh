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
let RecFormComp = class RecFormComp {
    constructor() {
        this.submitted = false;
    }
    ngOnInit() {
        this.model = this.recipe || new recipedetail_1.RecDetail('', [new ingredients_1.Ingredients('', '')], '');
    }
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
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
    __metadata('design:paramtypes', [])
], RecFormComp);
exports.RecFormComp = RecFormComp;
//# sourceMappingURL=recipeform.component.js.map