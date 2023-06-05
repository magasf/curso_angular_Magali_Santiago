import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLongText'
})
export class LimitLongTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
