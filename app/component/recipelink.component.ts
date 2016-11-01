import { Component, Input } from '@angular/core';
import {RecName}  from '../abstract/recipename';


@Component({
    selector: 'rec-link',
    template: `<div *ngIf="recipe"><a href="{{recipe._id}}">{{recipe.name}}</a></div>
                `
})
export class RecLinkComp {
    @Input()
    recipe = RecName;
}

