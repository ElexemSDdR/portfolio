import { Component, input } from '@angular/core'
import { twMerge } from 'tailwind-merge'

@Component({
  selector: 'app-section-container',
  imports: [],
  templateUrl: './section-container.component.html',
})
export class SectionContainerComponent {
  id = input.required<string>()
  className = input.required<string>()
  title = input.required<string>()

  tailwindMerge = (classes: string[]) => twMerge(classes)
}
