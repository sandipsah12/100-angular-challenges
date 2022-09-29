import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {
  @Input() public tableData: any = [
    { first: 'Sandeep 1', last: 'Sah', DOB: '21/08/1996' },
    { first: 'Sandeep 2', last: 'Sah', DOB: '21/08/1996' },
    { first: 'Sandeep 3', last: 'Sah', DOB: '21/08/1996' },
    { first: 'Sandeep 4', last: 'Sah', DOB: '21/08/1996' },
    { first: 'Sandeep 5', last: 'Sah', DOB: '21/08/1996' },
  ];

  @Output() public headerSelected = new EventEmitter<{
    key: string;
    value: any;
  }>();

  public headerSelection(key: string, value: any) {
    this.headerSelected.emit({ key, value });
  }
}
