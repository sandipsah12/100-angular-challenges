import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrls: ['./pipe-documentation.component.scss'],
})
export class PipeDocumentationComponent {
  public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];
  public html = '<a href="https://www.youtube.com" target="blank">Youtube</a>';
  public stringArray = ['Youtube', 'Twitter', 'LinkedIn'];
  public objectArray: { [key: string]: string }[] = [
    { content: 'Youtube' },
    { content: 'Twitter' },
    { content: 'LinkedIn' },
  ];
  public modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  public reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
