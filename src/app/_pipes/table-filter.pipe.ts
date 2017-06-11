/**
 *    Filter for tables given a specific text
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        // When initialize the table, no apply the filter
        if (!args) {
            return value;
        }
        // Apply the filter
        return value.filter(items => items.indexOf(args) >= 0);
    }

}
