import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-res.ts';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  template: `

    <app-title [title]="fullname() "></app-title>


  @if(user()){
    <section>
      <img [srcset]="user()!.avatar"
      [alt]="user()?.first_name"/>
      <div>
        <h3>Name: {{fullname()}} </h3>
        <h4> Email: {{user()?.email}} </h4>
      </div>

      </section>

  } @else {
    <p class="h-[400px] w-full text-center rounded-full bg-gradient-to-r from-red-300 to-green-700 animate-pulse  text-8xl"
    >Loading!</p>
  }

  `,
  styleUrl: './user.component.css'
})
export default  class UserComponent {

  private route= inject(ActivatedRoute);
  private userService= inject(UsersService);
  public user = toSignal(
    this.route.params
    .pipe(
      switchMap(({id}) => this.userService.getUserById(id))
    )
  );
  public fullname= computed(()=>
    {
      if (this.user()) {
      return  `${this.user()?.first_name} ${this.user()?.last_name}`;
    }
    return 'Wait please!'
  }

);
//  public user = signal<User | undefined>(undefined);
//usaremos to signal para convertir el observable en una señal

}
