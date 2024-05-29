import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h1  class="p-2 text-center text-3xl mb-5">{{title}}</h1>`,
  styleUrl: './title.component.css'
})
export class TitleComponent {
@Input({required: true})
public title!:string;

@Input({transform: booleanAttribute})
public withShadow:boolean= false;

constructor(){

}
}
