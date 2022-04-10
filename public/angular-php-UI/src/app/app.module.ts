import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { RegisterComponent } from './register/register.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { AddSeriesComponent } from './add-series/add-series.component';
import { EditSeriesComponent } from './edit-series/edit-series.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { CastDetailComponent } from './cast-detail/cast-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ErrorPageComponent,
    SeriesListComponent,
    SeriesDetailsComponent,
    AddSeriesComponent,
    EditSeriesComponent,
    CastDetailsComponent,
    CastDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
        component:AddSeriesComponent
      },
      {
        path:"edit/:seriesId",
        component:EditSeriesComponent
      },
      {
        path:"series/:seriesId/cast",
        component:CastDetailsComponent
      },
      {
        path:"series/:seriesId/cast/:castId",
        component:CastDetailComponent
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
