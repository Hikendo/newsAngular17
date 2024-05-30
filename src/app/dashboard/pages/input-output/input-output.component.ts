import { Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../../interfaces/product.interface';
import { interval,take,tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export default class InputOutputComponent implements OnDestroy {

    public products= signal<Product[]>([
      {
id: 1,
name: 'Product 1',
quantity:0,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity:0,
          }
  ]);

  private intervalSubscrrition = interval(1000).pipe(
    tap(()=> {
      this.products.update((products => [...products,{
        id: products.length +1,
        name: `Product ${products.length +1}`,
        quantity: 0,
      }]))
    }),
    take(7)
  ).subscribe();

  ngOnDestroy(): void {
      this.intervalSubscrrition.unsubscribe();
  }

  updateProduct(product: Product, newQuantity: number){
    this.products.update((products)=>
    products.map(p=> p.id === product.id ? {...p, quantity: newQuantity}: p)
  )
  }
}
