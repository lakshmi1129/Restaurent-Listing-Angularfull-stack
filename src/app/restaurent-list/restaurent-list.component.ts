import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.css']
})
export class RestaurentListComponent implements OnInit {


  // properties
  rest ="All Restaurant List"

  // to hold the restaurant list
  restaurantList:any =[]

  // to hold search term
  searchTerm =""

  // Dependency injection
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // api call-asynchronous call - resolve state -subscribe()
    this.apiService.getAllRestaurantList()
    .subscribe((result)=>{
      this.restaurantList= result
      console.log(this.restaurantList= result);  
    })

    // to get search term from api service
    this.apiService.search.subscribe((data)=>{
      console.log(data);
      this.searchTerm =data
      
    })

  }

}
