import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { AutoSearchService } from '../service/ingredientsuggest.service';


@Component({
    selector: 'rec-search',
    templateUrl: `html/search.html`
})

export class RecSearchComp implements OnInit {

    autoSuggest: Observable<string[]>;

    private searchTerms = new Subject<string>();
    private userText;

    constructor( private autoSearchService: AutoSearchService,private router: Router) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
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

    searchRecipes(ingredient, input) {
        console.log('::',ingredient);
        this.userText = "";
        this.search('');
        input.focus();

    }

}