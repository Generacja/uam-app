import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FactsService} from "./core/api/facts.service";
import {HttpClientModule} from "@angular/common/http";
import {Route} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Route,
  ],
  providers: [FactsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
