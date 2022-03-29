import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productsx = products;

  share(val: String) {
    console.log('test');
    window.alert(val);
    // window.alert('The product has been shared!');
  }

  onNotify(val: String) {
    window.alert(val);
    // window.alert('You will be notified when the product goes on sale' + val);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
