import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor() { }

  test() {
    console.log('Kitty');
  }
}
