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
require('./rxjs-ext');
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const app_routing_module_1 = require('./app-routing.module');
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
const recipelink_component_1 = require('./component/recipelink.component');
const recipes_component_1 = require('./component/recipes.component');
const recipesearch_component_1 = require('./component/recipesearch.component');
const recipedetail_component_1 = require('./component/recipedetail.component');
const recipeform_component_1 = require('./component/recipeform.component');
const recipeedit_component_1 = require('./component/recipeedit.component');
const setFocus_directive_1 = require('./directive/setFocus.directive');
const capitilize_directive_1 = require('./directive/capitilize.directive');
const utility_pipes_1 = require('./pipes/utility.pipes');
const recipesapi_service_1 = require('./service/recipesapi.service');
const ingredientsuggest_service_1 = require('./service/ingredientsuggest.service');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [app_component_1.AppComponent,
            recipelink_component_1.RecLinkComp,
            recipes_component_1.RecListComp,
            recipesearch_component_1.RecSearchComp,
            recipedetail_component_1.RecDetailComp,
            recipeform_component_1.RecFormComp,
            recipeedit_component_1.RecEditComp,
            capitilize_directive_1.CapitalizeDirective,
            setFocus_directive_1.SetFocusDirective,
            utility_pipes_1.IngredientFormat],
        providers: [recipesapi_service_1.RecApiService,
            ingredientsuggest_service_1.AutoSearchService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map