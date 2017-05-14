import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { UserServices } from '../_services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
    model: any = {};
    loading = false;

    constructor() { 
        private router : Router;
        private userService: UserServices;
        private alertService: AlertService;
    }

    ngOnInit() {
    }

    register() {
        console.log("Enter register");
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // Set success message and pass true parameter to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                });
    }

}
