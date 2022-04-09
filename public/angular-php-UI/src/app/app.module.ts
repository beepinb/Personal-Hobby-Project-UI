import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { RegisterComponent } from './register/register.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { AddSeriesComponent } from './add-series/add-series.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ErrorPageComponent,
    SeriesListComponent,
    SeriesDetailsComponent,
    AddSeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"series",
        component:SeriesListComponent
      },
      {
        path:"series/:seriesId",
        component:SeriesDetailsComponent
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:'**',
        component:ErrorPageComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
