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
const recipename_1 = require("../abstract/recipename");
let RecLinkComp = class RecLinkComp {
    constructor() {
        this.recipe = recipename_1.RecName;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RecLinkComp.prototype, "recipe", void 0);
RecLinkComp = __decorate([
    core_1.Component({
        selector: 'rec-link',
        template: `<span *ngIf="recipe"><a routerLink="/recipe/{{recipe._id}}">{{recipe.name}}</a></span>`
    })
], RecLinkComp);
exports.RecLinkComp = RecLinkComp;
//# sourceMappingURL=recipelink.component.js.map