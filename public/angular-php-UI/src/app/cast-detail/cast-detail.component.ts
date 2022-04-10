import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesDataService } from '../series-data.service';
import { Cast } from '../series-list/series-list.component';

@Component({
  selector: 'app-cast-detail',
  templateUrl: './cast-detail.component.html',
  styleUrls: ['./cast-detail.component.css']
})
export class CastDetailComponent implements OnInit {


  cast!:Cast;

  constructor( private seriesService: SeriesDataService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getOneCast();
  }

  getOneCast():void{
    const seriesId = this.route.snapshot.params['seriesId'];
    const actorId = this.route.snapshot.params['castId'];
    this.seriesService.getOneCast(seriesId,actorId).subscribe(
      {
        next:cast=>{
          this.cast=cast;
        }
      }
    )
  }

  deleteCast():void{
    console.log("Inside delete Cast");
    const seriesId = this.route.snapshot.params['seriesId'];
    const castId = this.route.snapshot.params['castId'];
    this.seriesService.deleteCast(seriesId,castId).subscribe(
      {
        next:cast=>{
          console.log("Cast Deleted");
          this.router.navigate(['series/',seriesId]);
        }
      }
    )
  }

}
