import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Hydra} from "../../models/hydra";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchResults : Observable<Hydra> | undefined;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }

  public submitForm(value: any): void {
    this.searchResults = this.api.search(value.search);
  }
}
