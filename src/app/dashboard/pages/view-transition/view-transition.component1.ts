import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition1',
  standalone: true,
  imports: [TitleComponent],
  template: `
  <app-title title="View Transition"></app-title>
  <section class="fixed bottom-1 bg-red-700 w-4 h-4">
    <img
    srcset="https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_vaCZ5Ham9sCyr8hZW3FutoX2kyuuooFpFPer7hSSY51p9-NuZin1pIYimljJxGG53b389nSurQ-uEZpQivrReeUtTNK1wlaZAKIEaOWF7CUlP9ErSbZjKzViCugEneTrw=s0-d"
    alt="Shuriken"
    width="200"
    height="300"
    class="rounded fixed bottom-1"
    style="view-transition-name: hero1;"

    />
    <div class="bg-blue-500 w-56 h-56"></div>
  </section>
  `,
})
export default class ViewTransitionComponent1 {

}
