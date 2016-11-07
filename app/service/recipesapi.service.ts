import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RecName} from '../abstract/recipename';
import { RecDetail } from '../abstract/recipedetail';

@Injectable()
export class RecApiService {

    private recipeNamesUrl = 'api/recipes';
    private recipeDetailUrl = 'api/recipe/';
    private recipeUpdateUrl = 'api/recipeedit/';
    private recipeAddUrl = 'api/recipeadd';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
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
}