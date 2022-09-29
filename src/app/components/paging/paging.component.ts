import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
})
export class PagingComponent {
  @Input() public totalItems = 1;
  @Input() public pageSize = 25;
  @Input() public currentPage = 1;
  @Input() public step = 2;
  @Output() public pageChange = new EventEmitter<number>();

  public get totalPages(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }

  public get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  public get isLastPagePage(): boolean {
    return this.currentPage === this.totalPages;
  }

  public get isNextDisabled(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  public get isPrevDisabled(): boolean {
    return this.currentPage - this.step < 1;
  }

  public get pages(): number[] {
    const pages = [];

    if (this.currentPage > 1) {
      pages.push(this.currentPage - 1);
    }
    pages.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      pages.push(this.currentPage + 1);
    }

    if (this.currentPage + 1 < this.totalPages) {
      pages.push(this.currentPage + 2);
    }

    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pages.push(this.currentPage + 3);
    }

    return pages;
  }

  public setPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}
