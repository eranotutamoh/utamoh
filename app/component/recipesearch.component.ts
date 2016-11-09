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

    constructor( private autoSearchService: AutoSearchService,private router: Router) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.autoSuggest = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.autoSearchService.ingredientSearch(term)
                // or the observable of empty heroes if no search term
                : Observable.of<string[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<string[]>([]);
            });
    }

}