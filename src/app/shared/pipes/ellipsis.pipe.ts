import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matrixEllipsis'
})
export class EllipsisPipe implements PipeTransform {
  public transform(value: string, limit: number): string {
    if (!limit || !value) {
      return value;
    }
    if (value.length > limit) {
      return `${value.substring(0, limit)}...`;
    }
    return value;
  }
}
