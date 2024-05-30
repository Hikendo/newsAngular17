import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserRes, UsersRes } from '../interfaces/req-res.ts';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';


interface State{
  users: User[];
loading: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  //Aunque hasta ahora usaramos private para cuando la clasee no es accesible fuera, es mejor usar '#' por que eso
  //ayuda a que en la transpilacion a javascript se respete el argumento como privado
  #state = signal<State>({
    loading:true,
    users:[],
  })
public users= computed(()=> this.#state().users);
public loading= computed(()=> this.#state().loading);

  constructor() {

    this.http.get<UsersRes>('https://reqres.in/api/users')
    .pipe(delay(1000))
    .subscribe(res => {
      this.#state.set({
        loading: false,
        users: res.data,
      })
    })
   }
   getUserById(id:string){
    return this.http.get<UserRes>(`https://reqres.in/api/users/${id}`)
    .pipe(
      delay(1000),
      map(resp => resp.data),
    );


   }
}
