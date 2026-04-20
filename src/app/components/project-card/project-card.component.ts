import { Component, input } from '@angular/core'

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styles: ``,
})
export class ProjectCardComponent {
  previewImage = input()
  title = input<string>()
  url = input<string>()
  description = input<string>()
  technologies = input.required<string[]>()
}
