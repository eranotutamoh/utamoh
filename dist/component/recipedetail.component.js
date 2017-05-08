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
const common_1 = require("@angular/common");
const recipesapi_service_1 = require("../service/recipesapi.service");
let RecDetailComp = class RecDetailComp {
    constructor(recNameService, route, location) {
        this.recNameService = recNameService;
        this.route = route;
        this.location = location;
        this.title = 'Recipe';
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
RecDetailComp = __decorate([
    core_1.Component({
        selector: 'recipe',
        templateUrl: 'html/recipedetail.html',
    }),
    __metadata("design:paramtypes", [recipesapi_service_1.RecApiService, router_1.ActivatedRoute, common_1.Location])
], RecDetailComp);
exports.RecDetailComp = RecDetailComp;
//# sourceMappingURL=recipedetail.component.js.map