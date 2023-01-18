import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  // property for property binding example
  search ="Enter place to see restuarant"

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  searchTerm(event:any){
    console.log(event.target.value);
    let searchKey =event.target.value
    this.api.search.next(searchKey)

    
  }

}
