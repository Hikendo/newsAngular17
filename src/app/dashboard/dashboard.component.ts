import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { SharedSideMenuComponent } from '@shared/shared-side-menu/shared-side-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, SharedSideMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
