import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { AboutMeModule } from './about-me/about-me.module';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        AboutMeModule
    ],
    providers: [],
    exports: [
        HeaderModule,
        AboutMeModule
    ]
})
export class SharedModule { }