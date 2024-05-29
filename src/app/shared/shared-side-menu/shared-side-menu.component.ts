import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shared-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './shared-side-menu.component.html',
  styleUrl: './shared-side-menu.component.css'
})
export class SharedSideMenuComponent {

  public menuItems = routes //leemos nuestras rutas de la aplicacion
  .map((route) => route.children ?? []) //obtenemos las rutas hijas
  .flat() //aplanamos el arreglo
  .filter(route => route && route.path) //excluimos las rutas comodin con caracteres vacios ''
  .filter(route => !route.path?.includes(':'))
  .filter(route => !route.path?.includes('**')); //excluimos las rutas que reciben parametros ':'


}
