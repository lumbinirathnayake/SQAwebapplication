import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'storyPipe'
})
export class StoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(
        item => item.storyName.toLowerCase().indexOf(args.toLowerCase()) > -1
    );
  }


}
