import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {Route} from "./contact-routing.module";
@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    Route
  ]
})
export class ContactModule { }
