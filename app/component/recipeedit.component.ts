import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {RecDetail}  from '../abstract/recipedetail';
import { RecApiService } from '../service/recipesapi.service';


@Component({
    selector: 'recipe-edit',
    template: `<rec-form  *ngIf="recipe" [recipe]="recipe"></rec-form>`
})

export class RecEditComp implements OnInit {

    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.getRecDetail(id);
        });
    }

    recipe: RecDetail;

    constructor(private recNameService: RecApiService,private route: ActivatedRoute ) {}

    getRecDetail(id) : void {
        this.recNameService.getRecDetail(id).then(data => this.recipe = data);
    }

}