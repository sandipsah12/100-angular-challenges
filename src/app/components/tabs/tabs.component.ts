import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() public tabs: { title: string; active: boolean }[] = [];
  @Output() public selectedTabIndex = new EventEmitter<number>();

  public selectTab(
    selected: { title: string; active: boolean },
    index: number
  ) {
    this.tabs.forEach((tab) => {
      tab.active = selected === tab;
    });
    this.selectedTabIndex.emit(index);
  }
}
