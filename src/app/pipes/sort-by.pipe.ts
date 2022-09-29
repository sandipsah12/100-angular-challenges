import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: string[], isAscending = true): string[] {
    if (value === null || value === undefined) return value;

    if (!Array.isArray(value)) {
      throw new Error('Sort by pipe requires an array');
    }
    return value.sort((a, b) => {
      const upperCase1 = a.toUpperCase();
      const upperCase2 = b.toUpperCase();
      return upperCase1 < upperCase2
        ? isAscending
          ? -1
          : 1
        : upperCase1 === upperCase2
        ? 0
        : isAscending
        ? 1
        : -1;
    });
  }
}
