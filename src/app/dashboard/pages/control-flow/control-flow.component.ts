import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '@shared/title/title.component';

type Grade= 'A' | 'B' | 'C' | 'D' |'F';
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ReactiveFormsModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export  default class ControlFlowComponent {
  public showContent= signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['React',     // Un framework de interfaz de usuario muy popular para aplicaciones web.
  'Angular',   // Un framework estructural para aplicaciones web dinámicas.
  'Vue.js',    // Un framework progresivo para construir interfaces de usuario.
  'Ember.js',  // Un framework ambicioso para aplicaciones web del lado del cliente.
  'Backbone.js', // Ofrece la estructura mínima para aplicaciones web.
  'Express.js',  // Un framework de aplicaciones web para Node.js.
  'Node.js',     // Un entorno de ejecución para JavaScript del lado del servidor.
  'React Native', // Permite desarrollar aplicaciones móviles nativas usando React.
  'Flutter',      // Un SDK de Google para aplicaciones móviles que también soporta JavaScript.
  'Phaser'
  ,]);
  public vacio = signal([]);
  public fb= inject(FormBuilder);
  public numberGrade= this.fb.group({
    gardeNum: ['0', [Validators.required,Validators.min(0), Validators.max(100)]],
  })
  public toogleContent(){
    this.showContent.update(value => !value);

  }
  setGrade():void{
    const grade= Number(this.numberGrade.value.gardeNum!)
    switch(true){
      case (grade > 89):
        this.grade.update(value=>'A');
        return;
      case (grade > 79):
        this.grade.update(value=>'B');
        return;
      case (grade > 69):
        this.grade.update(value=>'C');
        return;
      case (grade > 59):
        this.grade.update(value=>'D');
        return;
      case (grade < 60):
        this.grade.update(value=>'F');
        return;

    }
  }

}
