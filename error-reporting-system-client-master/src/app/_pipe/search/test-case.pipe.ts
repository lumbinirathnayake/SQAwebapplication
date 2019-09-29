import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testCaseSearch'
})
export class TestCasePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(
        item => item.testCaseTitle.toLowerCase().indexOf(args.toLowerCase()) > -1
    );
  }
}
