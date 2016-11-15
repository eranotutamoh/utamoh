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
    private userText;
    private recipes: RecName[];
    private searchParameters =  [];
    private searchInput;
    private listener;



    constructor(private recService: RecApiService, private autoSearchService: AutoSearchService,private router: Router) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
        this.listener = this.listener || this.autoSuggest.subscribe(result => {if(result.length == 1) this.searchRecipes(result[0]) });
    }
    ngOnInit(): void {
        this.searchInput = document.querySelector('#search-box');
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
    }

    searchRecipes(ingredient): void {
        let searchString = this.formatSearch(ingredient);
        this.listener.unsubscribe();
        this.listener = undefined;

        this.getRecNames(searchString);

        this.userText = "";
        this.searchTerms.next('');
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
        this.recipes.length = 0;
        this.searchInput.focus();
    }

}