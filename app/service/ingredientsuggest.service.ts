import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class AutoSearchService {
    constructor(private http: Http) {}

    ingredients: String[];

    ingredientSearch(term: string): Observable<string[]> {

        return this.http
        .get(`api/ingredients?ing=${term}`)
        .map((r: Response) => JSON.parse(r["_body"]) as string[]);
    }
}