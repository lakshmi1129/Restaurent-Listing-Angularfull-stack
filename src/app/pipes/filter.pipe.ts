import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // value:restaurent list is array (the input to be transformed) next give===> based on which basis trasformation done, next===> search by property name
  transform(restuarantList: any[], filterString: string, propName: any): any {
    // to hold result returned
    const result:any=[]
    // if any argument in 3 is missing
    if(!restuarantList || filterString=='' || propName==''){
    return restuarantList
  }

  restuarantList.forEach((restuarant:any)=>{
    if(restuarant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
      result.push(restuarant)
    }
  })
  return result

  }

}
