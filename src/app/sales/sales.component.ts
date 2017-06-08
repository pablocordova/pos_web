import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

    products: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    constructor() { }

    ngOnInit() {
    }

}
