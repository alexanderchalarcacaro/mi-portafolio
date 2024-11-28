import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServiceComponent } from './my-service.component';

@NgModule({
    declarations: [
        MyServiceComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MyServiceComponent
    ],
})
export class MyServiceModule { }