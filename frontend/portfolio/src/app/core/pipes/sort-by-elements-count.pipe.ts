import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByElementsCount',
  standalone: true
})
export class SortByElementsCountPipe implements PipeTransform {

  public transform<T, R extends Record<string, T[]>>(value: Record<string, T>, base: R): T[] {
    return Object.values<T>(value)
      .map(val => {
        const counter = Object.keys(base).reduce<number>((acc: number, curr: string) => {
          if (base[curr].includes(val)) { acc++ }
          return acc;
        }, 0);

        return { value: val, count: counter };
    })
    .sort((a, b) => b.count - a.count)
    .map(res => res.value);
  }
}
