import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNonColumns',
})
export class FilterNonColumnsPipe implements PipeTransform {
  transform(columns: string[]): string[] {
    if (!columns) {
      return [];
    }

    return columns.filter((col) => !['nameMobile', 'type'].includes(col));
  }
}
