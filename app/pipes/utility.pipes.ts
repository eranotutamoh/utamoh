import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'ingredientFormat'})
export class IngredientFormat implements PipeTransform {
    transform(value: string): string {
        if (/^_/.test(value)) return `<span class="ingHead"> ${value.replace(/^_/, '')} </span>`;
        return value;
    }
}


