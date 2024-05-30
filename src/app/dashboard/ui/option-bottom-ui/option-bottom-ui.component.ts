import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-option-bottom-ui',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './option-bottom-ui.component.html',
  styleUrl: './option-bottom-ui.component.css'
})
export class OptionBottomUiComponent {
openLink($event: MouseEvent) {
console.log($event)
}

}
