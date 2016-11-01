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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const router_1 = require('@angular/router');
const app_component_1 = require('./app.component');
const recipelink_component_1 = require('./component/recipelink.component');
const recipes_component_1 = require('./component/recipes.component');
const recipesearch_component_1 = require('./component/recipesearch.component');
const recipedetail_component_1 = require('./component/recipedetail.component');
const recipenames_service_1 = require('./service/recipenames.service');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/search',
                    pathMatch: 'full'
                },
                {
                    path: 'recipes',
                    component: recipes_component_1.RecComp
                },
                {
                    path: 'search',
                    component: recipesearch_component_1.RecSearchComp
                },
                {
                    path: 'recipe/:id',
                    component: recipedetail_component_1.RecDetailComp
                }
            ])],
        declarations: [app_component_1.AppComponent,
            recipelink_component_1.RecLinkComp,
            recipes_component_1.RecComp,
            recipesearch_component_1.RecSearchComp],
        providers: [recipenames_service_1.RecNameService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map