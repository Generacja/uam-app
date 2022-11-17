import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FactsService} from "../../../../core/api/facts.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  public facts: Array<any> = [];
  constructor(private factsService: FactsService, private changeDetectorRef: ChangeDetectorRef) {
    this.fetchCatFacts();
  }


  async fetchCatFacts() {
    const payload = await firstValueFrom(this.factsService.getFacts());
    console.log(payload);
    this.facts = payload.data;
    this.changeDetectorRef.detectChanges();
  }

}
