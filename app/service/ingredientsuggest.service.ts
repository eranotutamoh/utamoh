import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Subject }  from 'rxjs/Subject';


// Return suggested list of ingredients given partial search string

@Injectable()
export class AutoSearchService {

    private searchTerms = new Subject<string>();

    constructor(private http: Http) {}

    ingredientSearch(term: string): Observable<string[]> {
        return this.http
        .get(`api/ingredients?ing=${term}`)
        .map((r: Response) => JSON.parse(r["_body"]) as string[]);
    }

    suggestedIngredients(): Observable<string[]> {
        return this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.ingredientSearch(term)
                : Observable.of<string[]>([])
            )
            .catch(error => {
                console.log(error);
                return Observable.of<string[]>([]);
            });
    }

    next(term: string): void {
        this.searchTerms.next(term);
    }

}