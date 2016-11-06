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
const recipesapi_service_1 = require('../service/recipesapi.service');
let RecEditComp = class RecEditComp {
    constructor(recNameService, route) {
        this.recNameService = recNameService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = params['id'];
            this.getRecDetail(id);
        });
    }
    getRecDetail(id) {
        this.recNameService.getRecDetail(id).then(data => this.recipe = data);
    }
};
RecEditComp = __decorate([
    core_1.Component({
        selector: 'recipe-edit',
        template: `<div *ngIf="recipe">
                    <rec-form [recipe]="recipe"></rec-form>
                </div>`
    }), 
    __metadata('design:paramtypes', [recipesapi_service_1.RecApiService, router_1.ActivatedRoute])
], RecEditComp);
exports.RecEditComp = RecEditComp;
//# sourceMappingURL=recipeedit.component.js.map