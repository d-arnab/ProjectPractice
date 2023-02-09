import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[notShowDirective]'
})

export class NotShowDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef){}

    @Input() set notShowDirective(condition: boolean){
        if(!condition){
            this.viewContainer.createEmbeddedView(this.templateRef)
        }else {
            this.viewContainer.clear()
        }
    }
}