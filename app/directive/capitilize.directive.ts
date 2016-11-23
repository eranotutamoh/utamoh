import { Directive  } from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive({
    selector: '[ngModel][capitalize]',
    providers: [NgModel],
    host: {
        '(ngModelChange)' : 'onInputChange($event)'
    }
})
export class CapitalizeDirective {
    constructor(private model:NgModel){}

    onInputChange(event){
        let newValue = event.charAt(0).toUpperCase() + event.substr(1).toLowerCase();
        this.model.valueAccessor.writeValue(newValue);
    }
}