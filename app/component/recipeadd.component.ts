import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {RecDetail}  from '../abstract/recipedetail';
import { RecApiService } from '../service/recipesapi.service';
import {Ingredients} from "../abstract/ingredients";


@Component({
    selector: 'recipe-edit',
    template: `<div>
                    <rec-form></rec-form>
                </div>`
})

export class RecAddComp implements OnInit {

    ngOnInit(): void {

    }

    //recipe: RecDetail = new RecDetail('',[new Ingredients('','')],'');

    constructor(private recNameService: RecApiService,private route: ActivatedRoute ) {}



}