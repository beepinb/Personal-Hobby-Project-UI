import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDataService } from '../series-data.service';
import { Series } from '../series-list/series-list.component';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  series!:Series;
  // series.cast!:Series.cast

  constructor(private seriesService:SeriesDataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries():void{
    const seriesId=this.route.snapshot.params["seriesId"];

    this.seriesService.getSeries(seriesId).subscribe({
      next:series=>{
        console.log("Inside Series-Details");
        this.series=series;
      },
      error:err=>{
        console.log("Service Error",err);
      },
      complete:()=>{
        console.log("Completed");
        
      }
    })
    

  }

}
