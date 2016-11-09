import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { RecApiService } from '../service/recipesapi.service';


@Component({
    selector: 'recipe-edit',
    template: `<div>
                    <rec-form></rec-form>
                </div>`
})

export class RecAddComp implements OnInit {

    ngOnInit(): void {

    }

    constructor(private recNameService: RecApiService,private route: ActivatedRoute ) {}



}