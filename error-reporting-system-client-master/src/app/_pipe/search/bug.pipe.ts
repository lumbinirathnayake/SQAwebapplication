import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bugSearch'
})
export class BugPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(
        item => item.bugTitle.toLowerCase().indexOf(args.toLowerCase()) > -1
    );
  }
}
