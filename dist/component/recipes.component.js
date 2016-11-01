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
var core_1 = require('@angular/core');
var recipenames_service_1 = require('../service/recipenames.service');
var RecComp = (function () {
    function RecComp(recNameService) {
        this.recNameService = recNameService;
        this.title = 'Recipe';
        this.name = 'Virgil Hanover';
    }
    RecComp.prototype.ngOnInit = function () {
        this.getRecNames();
    };
    RecComp.prototype.logIndex = function (idx) {
        console.log('Recipe', this.recipes[idx]._id, this.recipes[idx].name);
        this.onSelect(this.recipes[idx]);
    };
    ;
    RecComp.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe;
    };
    RecComp.prototype.getRecNames = function () {
        var _this = this;
        this.recNameService.getRecNames().then(function (data) { return _this.recipes = data; });
    };
    RecComp = __decorate([
        core_1.Component({
            selector: 'recipes',
            templateUrl: 'html/recipes.html',
            styles: ["\n    .yo {\n      background-color: greenyellow !important;\n      color: white;\n    } "],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof recipenames_service_1.RecNameService !== 'undefined' && recipenames_service_1.RecNameService) === 'function' && _a) || Object])
    ], RecComp);
    return RecComp;
    var _a;
}());
exports.RecComp = RecComp;
//# sourceMappingURL=recipes.component.js.map