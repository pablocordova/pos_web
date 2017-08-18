import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  create(params: Object) {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(params);

    return this.http.post('/api/category', body, options)
                    .map((response: Response) => {
                      return response.json();
                    });
  }

}
