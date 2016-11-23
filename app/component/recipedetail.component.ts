import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {RecDetail}  from '../abstract/recipedetail';
import { RecApiService } from '../service/recipesapi.service';


@Component({
    selector: 'recipe',
    templateUrl: 'html/recipedetail.html',
})

export class RecDetailComp implements OnInit {

    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.getRecDetail(id);
        });
    }

    title = 'Recipe';
    recipe: RecDetail;

    constructor(private recNameService: RecApiService,private route: ActivatedRoute, private location: Location ) {}

    getRecDetail(id) : void {
        this.recNameService.getRecDetail(id).then(data => this.recipe = data);
    }

}

