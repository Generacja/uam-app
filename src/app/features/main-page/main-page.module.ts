import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {NavbarModule} from "../../shared/features/navbar/navbar.module";
import {WrapperImageModule} from "./_features/wrapper-image/wrapper-image.module";
import {ArticleListModule} from "./_features/article-list/article-list.module";


@NgModule({
    declarations: [
        MainPageComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        NavbarModule,
        WrapperImageModule,
        ArticleListModule
    ]
})
export class MainPageModule {
}
