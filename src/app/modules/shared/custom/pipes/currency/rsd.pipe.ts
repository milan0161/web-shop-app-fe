import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rsd'
})
export class RsdPipe implements PipeTransform {

  transform(value: string): string {
    return value + ' ' + 'RSD'
  }

}
