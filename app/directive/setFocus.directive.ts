import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({ selector: '[hasFocus]' })

export class SetFocusDirective {

    @Input("hasFocus") hasFocus: boolean;
    constructor(private elementRef: ElementRef) {}

    ngOnChanges(changes: SimpleChanges)
    {
        if (changes["hasFocus"] && changes["hasFocus"].currentValue === true)
        {
            this.elementRef.nativeElement.focus();
        } else {
            //this.elementRef.nativeElement.blur();
        }
    }

}

