import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleans'
})
export class BooleansPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value==true){
      return "si";
    }else{
      return "no";
    }
  }

}
