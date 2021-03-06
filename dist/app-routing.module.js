"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const recipes_component_1 = require("./component/recipes.component");
const recipesearch_component_1 = require("./component/recipesearch.component");
const recipedetail_component_1 = require("./component/recipedetail.component");
const recipeform_component_1 = require("./component/recipeform.component");
const recipeedit_component_1 = require("./component/recipeedit.component");
const routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: 'recipes',
        component: recipes_component_1.RecListComp
    },
    {
        path: 'search',
        component: recipesearch_component_1.RecSearchComp
    },
    {
        path: 'recipe/:id',
        component: recipedetail_component_1.RecDetailComp
    },
    {
        path: 'edit/:id',
        component: recipeedit_component_1.RecEditComp
    },
    {
        path: 'recipeadd',
        component: recipeform_component_1.RecFormComp
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map