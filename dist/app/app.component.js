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
var recipes_component_1 = require('./recipes.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Recipe';
        this.name = 'John';
        this.recipes = [{ "_id": "57e32a7ac5ff5d0f0047d8d0", "name": "Arab Spring Salad" }, { "_id": "57c3f8772ff8260f00cb266a", "name": "Artichoke + Green Bean Salad" }, { "_id": "57bc16398671a10f0068a740", "name": "Asparagus & Orange Salad with Panko Haloumi" }, { "_id": "57bc188d8671a10f0068a777", "name": "Asparagus w/ Roasted Sesame Dressing" }];
    }
    AppComponent.prototype.logIndex = function (idx) {
        console.log('Recipe', this.recipes[idx]._id, this.recipes[idx].name);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'html/recipes.html',
            directives: [recipes_component_1.Reck]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map