import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full', cssClass]">
    <ng-content #name></ng-content>

  </section>
  `,
  styleUrl: './heavy-loaders-fast.component.css'
})
export class HeavyLoadersFastComponent {
  @Input({required: true}) cssClass!: string;


}
