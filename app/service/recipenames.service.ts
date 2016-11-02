import { Injectable } from '@angular/core';
import { RECNAMES } from '../mocknames';
import { RecName} from '../abstract/recipename';

@Injectable()
export class RecNameService {
    getRecNames() : Promise<RecName[]> {
        return Promise.resolve(RECNAMES);
    }
    getRecDetail(id: string) : Promise<RecName>  {
        return this.getRecNames()
            .then(recipes => recipes.find(recipe => recipe._id === id));
    }
}