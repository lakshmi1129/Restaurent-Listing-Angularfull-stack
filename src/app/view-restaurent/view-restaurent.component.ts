import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-restaurent',
  templateUrl: './view-restaurent.component.html',
  styleUrls: ['./view-restaurent.component.css']
})
export class ViewRestaurentComponent implements OnInit {

   restid:number =0

   restDetails:any ={}

  constructor( private activatedRoute:ActivatedRoute , private apiservice:ApiService) { }

  ngOnInit(): void {

    // to get parameter for url
    this.activatedRoute.params.subscribe((result)=>{

      this.restid =result['id']
      console.log( this.restid);

      
    })

    // call api to get single restuarant detail
     this.apiservice.viewRestaurant(this.restid)
     .subscribe((result)=>{
      this.restDetails = result
      console.log(this.restDetails);
      
     })
  }

}
