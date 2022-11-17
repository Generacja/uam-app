import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MainPageModule} from "./features/main-page/main-page.module";
import {FactsService} from "./core/api/facts.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainPageModule,
    HttpClientModule,
  ],
  providers: [FactsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
