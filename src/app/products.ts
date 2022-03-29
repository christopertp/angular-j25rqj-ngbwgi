export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 22900000,
    description: 'A large phone with one of the best screens',
    color: 'blueprint',
    url: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 8970000,
    description: 'A great phone with one of the best cameras',
    color: 'yellow',
    url: 'https://images.unsplash.com/photo-1519923834699-ef0b7cde4712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 9490000,
    description: '',
    color: 'black',
    url: 'https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
