import { Component, Input } from '@angular/core';
import {RecDetail}  from '../abstract/recipedetail';
import {Ingredients}  from '../abstract/ingredients';

@Component({
    selector: 'rec-form',
    templateUrl: 'html/recipeform.html'
})

export class RecFormComp {

    @Input()
    recipe: RecDetail;

    ngOnInit(): void {
        this.model = this.recipe || new RecDetail('',[new Ingredients('','')],'');
    }

    model: RecDetail;

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}