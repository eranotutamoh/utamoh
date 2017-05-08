import { Component, Input } from '@angular/core';
import {RecName}  from '../abstract/recipename';


@Component({
    selector: 'rec-link',
    template: `<span *ngIf="recipe"><a routerLink="/recipe/{{recipe._id}}">{{recipe.name}}</a></span>`
})
export class RecLinkComp {
    @Input()
    recipe = RecName;''
}

