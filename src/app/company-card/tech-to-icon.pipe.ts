import { Technologies } from './technologies';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'techToIcon'
})
export class TechToIconPipe implements PipeTransform {
  transform(tech: string): string {
    const logo = Technologies[tech.toLowerCase()];
    if (logo) {
      return `/assets/images/${logo}.svg`;
    }
    return '';
  }
}
