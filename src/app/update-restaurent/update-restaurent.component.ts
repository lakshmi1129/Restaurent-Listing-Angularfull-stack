import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {

  restid:any;
  restDetails:any={}
  constructor(private activatedRoute:ActivatedRoute, private apiservice:ApiService, private router:Router) { }

  ngOnInit(): void {
    // get restuarant id to be updated
    this.activatedRoute.params.subscribe((result:any)=>{
       this.restid = result['id']
    })

    // 2.fetch restuarant details of id which is requested
    this.apiservice.viewRestaurant(this.restid)
    .subscribe((result)=>{
      this.restDetails = result
    })
    
  }

  // 3.user defined function for update a restaurent detail
  updateRestuarant(form:any){
    console.log(form.value);
    let updateRest = {
      id:form.value.id,
      name:form.value.rName,
      neighborhood:form.value.neighbourhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      reviews:[
        {
        name:form.value.rvname,
        date:form.value.date,
        rating:form.value.rating,
        comments:form.value.comments

      }
    ]
      
    }
    
console.log('updateRestuaran');

     this.apiservice.updateRestuarant(this.restid,updateRest)
     .subscribe(()=>{
      alert('Updated Successfully')

     })
     this.router.navigateByUrl('')
    

    }
  

}
