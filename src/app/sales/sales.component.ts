import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  // Fake data to test
  products: string[] = [
                        'leche gloria',
                        'aceite primor',
                        'fideos anita',
                        'azucar paramonga',
                        'atun fanny',
                        'fideos don victorio',
                        'arroz caserita',
                        'arroz verde',
                        'nescafe',
                        'jabon bolivar blanco'
                      ];

  // Contains element of last row selected.
  lastRowSelect: HTMLElement;
  // Contains element of last row where the mouse passed.
  lastRowOver: HTMLElement;
  // Array for all products
  product = [{}];
  // variable to sum all product prices
  sum_total = 0;

  constructor() { }

  ngOnInit() {

  }

  /**
   *  Event when click in one product on the product's list,
   *  this one highlight with a specific background color.
   *
   *  @input {object} event : object with all properties of click event generated
   *  @return nothing
   */
  selectRow(event) {

    // Extract current row
    const currentRow = event.srcElement;
    // case exist lastRow
    if (this.lastRowSelect) {
      // come back to white color the last row selected
      this.lastRowSelect.style.background = '#FFFFFF';
    }
    // Paint of blue color the current row selected
    currentRow.style.background = '#5882FA';
    // save this row
    this.lastRowSelect = currentRow;
  }

  /**
   *  Event when the mouse hover on the product's list, this one highlight with
   *  a specific background color, this color will be with less intensity and secondary
   *  way to difference when a item on the list is selected as the selecRow event.
   *
   *  @input {object} event : object with all properties of event generated,
   *                          in this case the event is hover mouse inside product's list
   *  @return nothing
   */

  rowOver(event) {

    // Extrac current row
    const currentRow = event.srcElement;

    // not paint of white when the last row where is passed is the same that row selected
    if (this.lastRowOver !== this.lastRowSelect) {
      this.lastRowOver.style.background = '#FFFFFF';
    }

    // Also not paint of gray when current row where is passed is the same that row selected
    if (currentRow !== this.lastRowSelect) {
      currentRow.style.background = '#E6E6E6';
    }

    // save this row
    this.lastRowOver = currentRow;
  }

  /**
   *  Add a product inside sale table
   *  @param nothing
   *  @return nothing
   */

  addProduct() {

    // Fake data to test
    const amount = 2;
    const product = 'Suggar Casa Grande';
    const price = 100.5;
    const total = amount * price;

    this.product.push({
                       'amount': amount,
                       'product': product,
                       'price': price,
                       'total': total,
                       'remove': 'x'
                     });

    this.sum_total += total;

  }

  /**
   *  Delete row from table sales
   *  @param {integer} index - row number to delete
   *  @return nothing
   */

  deleteRow(index) {
    this.product.splice(index, 1);
  }

}
