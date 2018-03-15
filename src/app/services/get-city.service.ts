import { Injectable } from '@angular/core';
import { OpenWeather} from '../configs/open-weather.config';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

}
