import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featurePipe'
})
export class FeaturePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(
        item => item.featureName.toLowerCase().indexOf(args.toLowerCase()) > -1
    );
  }

}
