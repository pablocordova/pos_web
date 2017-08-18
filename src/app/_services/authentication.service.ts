import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string) {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers});
    const body = JSON.stringify({ username: username, password: password });

    return this.http.post('/api/authenticate', body, options)
                .map((response: Response) => {
                  const user = response.json();
                  if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                  }
                });
  }

  logout() {
      localStorage.removeItem('currentUser');
  }

}
