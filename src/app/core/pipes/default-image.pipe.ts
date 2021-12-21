import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  
  transform(value: string, type: string): string {
    const IMAGES:{ [key: string]: any } = {
      user: './assets/images/default-user.png',
      client: './assets/images/default-client.png',
      product: './assets/images/default-product.png'
    };
    return value && value !== '' ? value : IMAGES[type];
  }
}
