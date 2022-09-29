import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  public searchTerm = '';
  @Input() public items: string[] = [];
  public hasBeenSelected = false;

  public updateSearchTerm(value: string) {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }

  public selectSearchTerm(value: string) {
    this.searchTerm = value;
    this.hasBeenSelected = true;
  }
  constructor() {}

  ngOnInit(): void {}
}
