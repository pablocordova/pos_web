import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

    constructor(private http : Http) { }

    create(params : Object) {
        let headers = new Headers({ 'Content-type' : 'application/json' }); 
        let options = new RequestOptions({ headers : headers });
        let body = JSON.stringify(params);

        return this.http.post('/api/category', body, options)
                        .map((response : Response) => {
                            return response.json();
                        });
    }

}
