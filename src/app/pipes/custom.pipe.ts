import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...names: any[]): any {
    return value + ' ' + names[1] + ' ' + names[2];
  }

}
