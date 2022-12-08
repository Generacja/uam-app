import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import {ArticleModule} from "./_features/article/article.module";



@NgModule({
    declarations: [
        ArticleListComponent
    ],
    exports: [
        ArticleListComponent
    ],
  imports: [
    CommonModule,
    ArticleModule
  ]
})
export class ArticleListModule { }
