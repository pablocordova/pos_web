import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

    // Fake data to test
    products: string[] = ['leche gloria', 'aceite primor', 'fideos anita', 'azucar paramonga', 'atun fanny', 'fideos don victorio', 'arroz caserita', 'arroz verde', 'nescafe', 'jabon bolivar blanco'];
    // Contains element of last row selected.
    lastRowSelect: HTMLElement;
    // Contains element of last row where the mouse passed.
    lastRowOver: HTMLElement;

    constructor() { }

    ngOnInit() {

    }


    selectRow(event) {
        // Extract current row
        let currentRow = event.srcElement;
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

    rowOver(event) {
        // Extrac current row
        let currentRow = event.srcElement;
        
        // not paint of white when the last row where is passed is the same that row selected
        if (this.lastRowOver != this.lastRowSelect) {
            this.lastRowOver.style.background = '#FFFFFF';
        }

        // Also not paint of gray when current row where is passed is the same that row selected
        if (currentRow != this.lastRowSelect) {
            currentRow.style.background = '#E6E6E6';
        }

        // save this row
        this.lastRowOver = currentRow;
    }

}
