import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesDataService } from '../series-data.service';
import { Cast, Series } from '../series-list/series-list.component';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  casts!:Cast[];

  constructor(private seriesService: SeriesDataService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.showAllCast();
  }

  showAllCast():void{
    const seriesId = this.route.snapshot.params['seriesId'];
    this.seriesService.getAllCast(seriesId).subscribe(
      {
        next:casts=>{
          this.casts=casts;
          console.log("Cast Found");
          console.log(casts);
           
        },
        error: (err) => {
          console.log('Service Error', err);
        },
        complete: () => {
          console.log('Completed');
          // this.router.navigate(["series"]);
        }
      }
    )
  }

  viewDetail():void{
    console.log("Inside view Detail of one cast");
    
  }


  
}
