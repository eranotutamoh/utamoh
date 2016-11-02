export class RecDetail {
    _id: string;
    name: string;
    ingredients: Ingredients[];
    instructions: string;
}

class Ingredients {
    _id: string;
    name: string;
    quantity: string;
}