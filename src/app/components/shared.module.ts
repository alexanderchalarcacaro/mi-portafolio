import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { AboutMeModule } from './about-me/about-me.module';
import { ResumeModule } from './resume/resume.module';
import { MyServiceModule } from './my-service/my-service.module';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        AboutMeModule,
        ResumeModule,
        MyServiceModule
    ],
    providers: [],
    exports: [
        HeaderModule,
        AboutMeModule,
        ResumeModule,
        MyServiceModule
    ]
})
export class SharedModule { }