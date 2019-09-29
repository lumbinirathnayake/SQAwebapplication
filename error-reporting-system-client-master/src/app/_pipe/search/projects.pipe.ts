import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectSearch'
})
export class ProjectsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(
        item => item.proName.toLowerCase().indexOf(args.toLowerCase()) > -1
    );
  }
}
