import { Injectable } from '@angular/core';
import { RECNAMES } from '../mocknames';
import { RecName} from '../abstract/recipename';

@Injectable()
export class RecNameService {
    getRecNames() : Promise<RecName[]> {
        return Promise.resolve(RECNAMES);
    }
}