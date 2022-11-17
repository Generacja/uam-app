import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  // https://catfact.ninja/facts?limit=10
  constructor(private httpClient: HttpClient) { }

  getFacts() {
    return this.httpClient.get('https://catfact.ninja/facts?limit=10');
  }

  test() {
    console.log('Kitty');
  }
}
