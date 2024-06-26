import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [TitleComponent],
  template: `
  <app-title title="View Transition"></app-title>
  <section class="flex justify-content-start">
    <img
    srcset="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_vaCZ5Ham9sCyr8hZW3FutoX2kyuuooFpFPer7hSSY51p9-NuZin1pIYimljJxGG53b389nSurQ-uEZpQivrReeUtTNK1wlaZAKIEaOWF7CUlP9ErSbZjKzViCugEneTrw=s0-d"
    alt="Shuriken"
    width="200"
    height="300"
    class="rounded-full"
    style="view-transition-name: hero1;"
    />
    <div class="bg-blue-500 w-56 h-56"></div>
  </section>
  `,
})
export default class ViewTransitionComponent {

}
