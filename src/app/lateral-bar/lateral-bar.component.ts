import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lateral-bar',
    templateUrl: './lateral-bar.component.html',
    styleUrls: ['./lateral-bar.component.css']
})
export class LateralBarComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }

    /**
     *    Event when a click is given in a title on home lateral bar
     *
     *    @param {string} idTitleLB - id current <a> tag
     */

    eventLateralBar(idTitleLB) {
        // Get all title elements
        let elementsCollapse = document.getElementsByClassName('titleLB');
        // Format text color
        [].forEach.call(elementsCollapse, function(elementCollapse) {
            // The currunt title lateral bar paint with blue color and
            // The other element with black color
            elementCollapse.style.color = elementCollapse.id == idTitleLB ? '#0101DF' : 'black';
        }); 
    }

}
