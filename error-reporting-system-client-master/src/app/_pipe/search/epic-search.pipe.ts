import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epicSearch'
})
export class EpicSearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(
        item => item.epicName.toLowerCase().indexOf(args.toLowerCase()) > -1
    );
  }
}
