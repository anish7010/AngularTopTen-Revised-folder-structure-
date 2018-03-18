import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//config files
import { OpenWeather} from '../configs/open-weather.config';
import { App } from '../configs/app.config';

@Injectable()
export class GetCityService {

  constructor(
    private http : Http
  ) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  fullUrl : string;

  getWeather(city : string) {
    this.fullUrl =  OpenWeather.api+city;
    return this.http.get(this.fullUrl).map(data => data.json(),
    (error: any)=>this.handleError(error));
    }

    private handleError(error: Response){
      return Observable.throw(error.statusText);
}

  addFav(city:any) {
  return this.http.post(App.jsonData+"favorites", city, {headers: this.headers})
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

  getFav() {
    return this.http.get(App.jsonData+"db").map(data => data.json(),
    (error: any)=>this.handleError(error));
  }
  
  remove(city) {
    return this.http.delete(App.jsonData+"favorites/"+city.id, { headers: this.headers })
      .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }

  update(oldValue, newValue) {
    return this.http.put(App.jsonData+"favorites/"+oldValue.id, newValue)
    .map( data=>data.json(),
    (error : any) => this.handleError(error));
  }
}
