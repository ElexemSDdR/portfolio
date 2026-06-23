import { Language } from '@/types'
import { Component, input } from '@angular/core'

@Component({
  selector: 'app-flags',
  imports: [],
  templateUrl: './flags.component.html',
  styles: ``,
})
export class FlagsComponent {
  name = input.required<Language>()
  className = input<string>()
}
