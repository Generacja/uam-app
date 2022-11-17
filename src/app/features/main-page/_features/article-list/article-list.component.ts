import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FactsService} from "../../../../core/api/facts.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  public test = null;
  constructor(private factsService: FactsService, private changeDetectorRef: ChangeDetectorRef) {
    this.fetchCatFacts();
  }


  async fetchCatFacts() {
    this.test = await firstValueFrom(this.factsService.getFacts());
    this.changeDetectorRef.detectChanges();
    console.log(this.test);
  }

}
