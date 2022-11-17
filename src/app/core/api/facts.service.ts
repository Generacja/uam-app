import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  constructor(private httpClient: HttpClient) { }

  getFacts(): Observable<any> {
    return this.httpClient.get('https://catfact.ninja/facts?limit=10');
  }

  test() {
    console.log('Kitty');
  }
}
