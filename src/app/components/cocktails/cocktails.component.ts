import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Json} from "../../models/json";
import {ApiService} from "../../services/api.service";
import {Hydra} from "../../models/hydra";

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

  public hydra: Observable<Hydra>;

  constructor(
    private api: ApiService
  ) {
    this.hydra = this.api.getCocktails();
}

  ngOnInit(): void {
  }

}
