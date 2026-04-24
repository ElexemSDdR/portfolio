import type { Icon } from '@/env.d'
import { Component, input } from '@angular/core'

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.component.html',
  styles: ``,
})
export class IconsComponent {
  name = input.required<Icon>()
}
