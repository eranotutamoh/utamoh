import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RecName} from '../abstract/recipename';
import { RecDetail } from '../abstract/recipedetail';

@Injectable()
export class RecApiService {

    private recipeSearchUrl = 'api/ingredientsearch';
    private recipeNamesUrl = 'api/recipes';
    private recipeDetailUrl = 'api/recipe/';
    private recipeUpdateUrl = 'api/recipeedit/';
    private recipeAddUrl = 'api/recipeadd';
    private recipeDeleteUrl = 'api/recipedelete/';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    getRecBySearch(searchParams: string) : Promise<RecName[]> {
        return this.http.get(`${this.recipeSearchUrl}${searchParams}`)
            .toPromise()
            .then(response => JSON.parse(response["_body"]) )
            .catch(this.handleError);
    }
    getRecNames() : Promise<RecName[]> {
        return this.http.get(this.recipeNamesUrl)
            .toPromise()
            .then(response => JSON.parse(response["_body"]) )
            .catch(this.handleError);
    }
    getRecDetail(id: string) : Promise<RecDetail>  {
        return this.http.get(`${this.recipeDetailUrl}${id}`)
            .toPromise()
            .then(response => JSON.parse(response["_body"]))
            .catch(this.handleError);
    }
    update(recipe: RecDetail): Promise<RecDetail> {
        const url = `${this.recipeUpdateUrl}${recipe._id}`;
        return this.http
            .put(url, JSON.stringify(recipe), {headers: this.headers})
            .toPromise()
            .then(() => recipe)
            .catch(this.handleError);
    }
    create(recipe: RecDetail): Promise<RecDetail> {
        return this.http
            .post(this.recipeAddUrl, JSON.stringify(recipe), {headers: this.headers})
            .toPromise()
            .then(response => JSON.parse(response["_body"]))
            .catch(this.handleError);
    }
    delete(id: string): Promise<void> {
        const url = `${this.recipeDeleteUrl}${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}