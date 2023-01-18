import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {

// properties for two way binding defined in html file in the m=component
  id:any
  neighbourhood:any
  photograph:any
  Monday:any
  Tuesday:any
  Wednesday:any
  Thursday:any
  Friday:any
  Saturday:any
  Sunday:any
  rName:any
  address:any
  cuisine_type:any
  rvname:any
  date:any
  rating:any
  comments:any
  lat:any
  lng:any

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    
  }

  // user Defined function to add restuarant
  addProduct(){
    var newRestuarant= {
      id:this.id,
      name:this.rName,
      neighborhood:this.neighbourhood,
      photograph:this.photograph,
      address:this.address,
      latlng:{
        lat:this.lat,
        lng:this.lng
      },
      cuisine_type:this.cuisine_type,
      operating_hours:{
        Monday:this.Monday,
        Tuesday:this.Tuesday,
        Wednesday:this.Wednesday,
        Thursday:this.Thursday,
        Friday:this.Friday,
        Saturday:this.Saturday,
        Sunday:this.Sunday
      },
      reviews:[
        {
        name:this.rvname,
        date:this.date,
        rating:this.rating,
        comments:this.comments

      }
    ]
      
    }
    
   


    // alert('Restuarant added Successfully!!!')
  
  this.api.addRestuarant(newRestuarant)
   .subscribe(()=>{
      alert('Restuarant added Successfully!!!')
      this.router.navigateByUrl('')
   })
  }
  // event binding using $event --- the id is in event variable which is an object, target key, value key
  // changeId(event:any){
  //  console.log(event.target.value);
   
  // }
}
