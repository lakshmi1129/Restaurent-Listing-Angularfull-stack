import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // variables

  // Search box element
  search =new BehaviorSubject("")

// dependency injection
  constructor(private api:HttpClient) { }

  // user defined functions

  // 1. get all restaurent list
    getAllRestaurantList(){
  //   call api using  - http://localhost:3000/restaurants -get - HttpClient class - HttpClientModule
    return this.api.get('http://localhost:3000/restaurants')
    }


    // 2. To get a single restaurent detail
    viewRestaurant(restID:number){
      // call api using ID : http://localhost:3000/restaurants/restID
      //HTTP method used here - GET

      return this.api.get('http://localhost:3000/restaurants/'+restID)
    }

    // 3.to post new restaurent details

    addRestuarant(newrest:any){
     return this.api.post('http://localhost:3000/restaurants/',newrest)
    }

    // 4.to update a restuarant
    // using PUT 

    updateRestuarant(restid:any,updatedRestBody:any){
      return this.api.put('http://localhost:3000/restaurants/'+restid,updatedRestBody)
    }


    deleteRestuarant(restId:any){
      return this.api.delete('http://localhost:3000/restaurants/'+restId)
    }
}
