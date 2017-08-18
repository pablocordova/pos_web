/**
 *  The user service contains a standard set of CRUD methods for managin users,
 *  it contains a jwt() method that's used to
 *  add the JWT from local storage to the Authorization header of each http request
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';

// Is necessary import this to use map
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // Get all users
  getAll() {
    return this.http.get('/api/users', this.jwt())
                      .map((response: Response) => response.json());
  }

  // Get One user by ID
  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt())
                      .map((response: Response) => response.json());
  }

  // Create user
  create(user: User) {
    return this.http.post('/api/users', user, this.jwt())
                      .map((response: Response) => response.json());
  }

  // Update user
  update(user: User) {
    return this.http.post('/api/users/' + user.id, user, this.jwt())
                      .map((response: Response) => response.json());
  }

  // Delete user
  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt())
                      .map((response: Response) => response.json());
  }

  // Private methods

  private jwt() {
    // Create autorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // TODO: Check if the token is needed to create users, I'm thinking not.
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
