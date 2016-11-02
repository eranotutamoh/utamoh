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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var recipenames_service_1 = require('../service/recipenames.service');
var RecDetailComp = (function () {
    function RecDetailComp(recNameService, route, location) {
        this.recNameService = recNameService;
        this.route = route;
        this.location = location;
        this.title = 'Recipe';
    }
    RecDetailComp.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.getRecDetail(id);
        });
    };
    RecDetailComp.prototype.getRecDetail = function (id) {
        var _this = this;
        this.recNameService.getRecDetail(id).then(function (data) { return _this.recipe = data; });
    };
    RecDetailComp.prototype.goBack = function () {
        this.location.back();
    };
    RecDetailComp = __decorate([
        core_1.Component({
            selector: 'recipe',
            templateUrl: 'html/recipedetail.html',
        }), 
        __metadata('design:paramtypes', [recipenames_service_1.RecNameService, router_1.ActivatedRoute, common_1.Location])
    ], RecDetailComp);
    return RecDetailComp;
}());
exports.RecDetailComp = RecDetailComp;
//# sourceMappingURL=recipedetail.component.js.map