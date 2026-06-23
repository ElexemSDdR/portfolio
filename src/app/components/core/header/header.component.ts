import { Component } from '@angular/core'
import { IconsComponent } from '@components/utilities/icons/icons.component'
import { OptionsMenuComponent } from './options-menu/options-menu.component'

@Component({
  selector: 'app-header',
  imports: [IconsComponent, OptionsMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.components.css',
})
export class HeaderComponent {}
