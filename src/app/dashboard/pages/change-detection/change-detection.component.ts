import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-title [title]="currentFrramework()"></app-title>
  <pre> {{frameworkAsSignal() | json}} </pre>
  <pre> {{frameworkAsProperty | json}} </pre>
  `,
  styles: ''
})
export default class ChangeDetectionComponent {

  public currentFrramework= computed(()=> `Change Detection - ${this.frameworkAsSignal().name}`)

  public frameworkAsSignal= signal({
    name: 'Angular',
    release: 2016,
  });
  public frameworkAsProperty= {
    name: 'Angular',
    release: 2016,
  };

  constructor(){


    setTimeout(()=>{
     //Lo dejamos por que estamos detectando cambios on push this.frameworkAsProperty.name='React';
      this.frameworkAsSignal.update(value => ({...value, name: 'Angular Universe'}))
      console.log('hecho')
    },3000)
  }

}
