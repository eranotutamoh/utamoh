import { Component, Input } from '@angular/core';
import {RecDetail}  from '../abstract/recipedetail';
import {Ingredients}  from '../abstract/ingredients';
import { Router } from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { AutoSearchService } from '../service/ingredientsuggest.service';
import { RecApiService } from '../service/recipesapi.service';

@Component({
    selector: 'rec-form',
    templateUrl: 'html/recipeform.html'
})

export class RecFormComp {

    @Input()
    recipe: RecDetail;


    private autoSuggest: Observable<string[]>;
    private searchTerms = new Subject<string>();
    private model: RecDetail;
    private submitted = false;
    private list = [];
    private listUl;
    private searchWord = [];
    private focusedInput;

    constructor(private recService: RecApiService, private router: Router, private autoSearchService: AutoSearchService, ) { }

    ngOnInit(): void {
        this.model = this.recipe || this.newRecipe() ;
        this.autoSuggester();
        this.listUl = document.querySelector('#ingredients-ul');
    }
    search(event): void {
        this.searchWord.push(String.fromCharCode(event.keyCode));
        this.searchTerms.next(this.searchWord.join(''));
        if(event.keyCode == 13 && this.list[0]) this.completeSearch();
    }
    prepareSearch(target) {
        this.listUl.style.top = target.offsetTop+6+'px';
        this.listUl.style.left = target.offsetLeft+'px';
        this.focusedInput = target;
    }
    completeSearch() {
        this.focusedInput.value = this.list[0];
        this.searchTerms.next('');
        this.searchWord = [];
    }
    autoSuggester(): void {
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
        this.autoSuggest.subscribe(result => { this.list = result});
    }
    newRecipe(): RecDetail {
        let ings = [new Ingredients('','')]
        return new RecDetail('',ings,'');
    }
    addIngredient(): boolean {
        this.model.ingredients.push(new Ingredients('',''));
        return false;
    };
    removeIngredient(ix): boolean {
        this.model.ingredients.splice(ix,1);
        return false;
    };
    updateRecipe(): void {
        let link = ['/recipe', this.recipe._id];
        ;
        this.recService.update(this.model)
            .then(() => this.router.navigate(link));
    }
    addRecipe(): void {
        this.recService.create(this.model)
            .then(data => this.router.navigate(['/recipe', data._id]));
    }
    onSubmit() {
        if(this.model._id) this.updateRecipe();
        else this.addRecipe();
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}