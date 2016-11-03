import {Ingredients} from './ingredients'

export class RecDetail {

    constructor(
    public name: string,
    public ingredients: Ingredients[],
    public instructions: string,
    public _id?: string

    ) {}

}

