import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { AutoSearchService } from '../service/ingredientsuggest.service';
import { RecApiService } from '../service/recipesapi.service';
import {RecName}  from '../abstract/recipename';

@Component({
    selector: 'rec-search',
    templateUrl: `html/search.html`
})

export class RecSearchComp implements OnInit {

    autoSuggest: Observable<string[]>;
    private searchTerms = new Subject<string>();
    private recipes:  RecName[];
    private searchParameters =  [];
    private searchInput;
    private list = [];

    constructor(private recService: RecApiService, private autoSearchService: AutoSearchService,private router: Router) {}

    ngOnInit(): void {
        this.searchInput = document.querySelector('#search-box');
        this.autoSuggester();
    }
    search(term: string, keyPressed): void {
        this.searchTerms.next(term);
        if(keyPressed == 13 && this.list[0])   this.searchRecipes(this.list[0]);
    }
    autoSuggester() {
        this.autoSuggest = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.autoSearchService.ingredientSearch(term)
                : Observable.of<string[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<string[]>([]);
            });
        this.autoSuggest.subscribe(result => { this.autoSelect(result)});
    }
    autoSelect(list) {
            this.list = list;
            if(this.list.length == 1)   this.searchRecipes(this.list[0]);
    }
    searchRecipes(ingredient): void {
        let searchString = this.formatSearch(ingredient);
        this.getRecNames(searchString);
        this.searchTerms.next('');
        this.searchInput.value = '';
        this.searchInput.focus();
    }

    getRecNames(searchString) : void {
        this.recService.getRecBySearch(searchString).then(data => this.recipes = data);
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
    clear():void {
        this.searchParameters.length = 0;
        this.recipes = [];
        this.searchInput.value = '';
        this.searchInput.focus();
    }

}