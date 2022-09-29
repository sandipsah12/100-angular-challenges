import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
})
export class DebounceSearchComponent implements OnInit {
  @Input() public searchTerm = '';
  @Input() public placeHolder = 'Search';
  @Output() public searchUpdate = new EventEmitter<string>();

  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => this.searchUpdate.emit(value));
  }

  public updateSearchTerm(term: string) {
    this.searchUpdate$.next(term);
  }

  ngOnInit(): void {}
}
