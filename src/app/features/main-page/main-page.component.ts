import { Component, OnInit } from '@angular/core';
import {FactsService} from "../../core/api/facts.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private factsService: FactsService) {
    this.factsService.getFacts();
  }

  ngOnInit(): void {
  }

}
