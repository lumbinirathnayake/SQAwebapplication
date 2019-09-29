import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeePipe'
})
export class EmployeePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(
        item => item.userFname.toLowerCase().indexOf(args.toLowerCase()) > -1
    );
  }
}
