import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {RecName}  from '../abstract/recipename';
import { RecNameService } from '../service/recipenames.service';


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
    recipe: RecName;
    constructor(private recNameService: RecNameService,private route: ActivatedRoute, private location: Location ) {
    }
    getRecDetail(id) : void {
        this.recNameService.getRecDetail(id).then(data => this.recipe = data);
    }
}

