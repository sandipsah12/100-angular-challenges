import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTruncate',
})
export class TruncatePipe implements PipeTransform {
  public transform(value: string = '', length: number = 100): string {
    return value.length > length
      ? value.slice(0, length) + '...'
      : value.slice(0, length);
  }
}
