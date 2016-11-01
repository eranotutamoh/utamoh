import { Injectable } from '@angular/core';
import { RECNAMES } from '../mocknames';
import { RecName} from '../abstract/recipename';

@Injectable()
export class RecNameService {
    getRecNames() : Promise<RecName[]> {
        return Promise.resolve(RECNAMES);
    }
    getRecDetail(id: string) : Promise<RecName> {
        return this.getRecNames()
            .then(data => data.find(recName => recName._id === id));
    }
}