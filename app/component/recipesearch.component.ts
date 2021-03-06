import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AutoSearchService } from '../service/ingredientsuggest.service';
import { RecApiService } from '../service/recipesapi.service';
import {RecName}  from '../abstract/recipename';

@Component({
    selector: 'rec-search',
    templateUrl: `html/search.html`
})

export class RecSearchComp implements OnInit {

    autoSuggest: Observable<string[]>;
    private subscription: Subscription;
    private recipes:  RecName[];
    private searchParameters =  [];
    private searchInput;
    private dynamicIngredientList = [];

    constructor(private recService: RecApiService, private autoSearchService: AutoSearchService,private router: Router) {}

    ngOnInit(): void {
        this.searchInput = document.querySelector('#search-box');
        this.autoSuggest = this.autoSearchService.suggestedIngredients();
        this.subscription = this.autoSuggest.subscribe(result => this.autoSelect(result));
    }

   ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    search(term: string, keyPressed): void {
        this.autoSearchService.next(term)
        if(keyPressed == 13 && this.dynamicIngredientList[0])   this.searchRecipes(this.dynamicIngredientList[0]);
    }

    autoSelect(list) {
            this.dynamicIngredientList = list;
            if(this.dynamicIngredientList.length == 1)   this.searchRecipes(this.dynamicIngredientList[0]);
    }

    searchRecipes(ingredient): void {
        let searchString = this.formatSearch(ingredient);
        this.getRecNames(searchString);
        this.autoSearchService.next('');
        this.searchInput.value = '';
        this.searchInput.focus();
    }
    formatSearch(ingredient): string {
        let searchString = '';
        this.searchParameters.push(ingredient);
        let j = 2;
        for(let i=0; i<this.searchParameters.length; i++) {
            let par = (i == 0) ? '?ing1=' : '&ing'+j+++'='
            searchString += par+this.searchParameters[i];
        }
        return searchString;
    }
    getRecNames(searchString) : void {
        this.recService.getRecBySearch(searchString).then(data => this.recipes = data);
    }

    clear():void {
        this.searchParameters.length = 0;
        this.recipes = [];
        this.searchInput.value = '';
    }

}