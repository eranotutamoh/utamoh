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
let HighlightDirective = class HighlightDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnChanges(changes) {
        if (changes["hasFocus"] && changes["hasFocus"].currentValue === true) {
            this.elementRef.nativeElement.focus();
        }
        else {
            this.elementRef.nativeElement.blur();
        }
    }
};
__decorate([
    core_1.Input("hasFocus"), 
    __metadata('design:type', Boolean)
], HighlightDirective.prototype, "hasFocus", void 0);
HighlightDirective = __decorate([
    core_1.Directive({ selector: '[hasFocus]' }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map