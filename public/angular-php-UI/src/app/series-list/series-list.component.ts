import { Component, OnInit } from '@angular/core';
import { SeriesDataService } from '../series-data.service';

export class Series{
  _id!:string;
  title!:string;
  year!:number;
  // #cast!:[];
  cast!:[{name:"",age:"",_id:""}];

  // get _id(){
  //   return this.#_id;
  // }
  // get title(){
  //   return this.#title;
  // }
  // get year(){
  //   return this.#year;
  // }
  // get cast(){
  //   return this.#cast;
  // }

  // constructor(id:string,title:string,year:number){
  //   this.#_id=id;
  //   this.#title=title;
  //   this.#year=year;
  //   // this.#cast=cast;
  // }

}
export class Cast{
  _id!:string;
  name!:string;
  age!:number;
  // #cast!:[];
  // cast!:[{name:"",age:"",_id:""}];

}

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series!:Series[];

  constructor(private seriesService:SeriesDataService) { }

  ngOnInit(): void {


    this.seriesService.getAllSeries().subscribe(
      {
        next:series=>{
          console.log("Found List of Series");
          this.series=series;
        },
        error:err=>{
          console.log("Service error",err);
        },
        complete:()=>{
          console.log("Complete");
          
        }
      }
    )

  }

  getSeries():void{

  }

}
