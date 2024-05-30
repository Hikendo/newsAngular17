import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, effect, input, output } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
//esta es la nueva sintaxis equivalente a @Input({required: true}) product!:Product;
  public product= input.required<Product>();

  //Anteriormente para emitirr valores del hijo al padre se usaba la sintaxis
  //@Output() public onIncQuantity = new EventEmitter<number>();
  public onIncQuantity= output<number>();

  /**
   * incrementQuantity
   */
  public incrementQuantity() {
    this.onIncQuantity.emit(this.product().quantity +1)
  }
  public loginEffect = effect(()=> {
    console.log(this.product().name);
  })
}
