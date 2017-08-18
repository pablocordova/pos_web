import { Component, OnInit } from '@angular/core';
import { Product } from '../schemes/product';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  product = new Product('', '', 0, '', 0, 0);

  constructor() { }

  ngOnInit() {
  }

  saveProduct() {
  }

}
