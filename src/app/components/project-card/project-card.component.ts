import { type Technology, TechnologiesColors } from '@/env.d'
import { Component, input } from '@angular/core'

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styles: ``,
})
export class ProjectCardComponent {
  previewImage = input.required<string>()
  title = input.required<string>()
  url = input.required<string>()
  description = input.required<string>()
  technologies = input.required<string[]>()
  animateSide = input<string>('animate-fade-in-right')
  bgColorForTechnology = (technology: string) => {
    if (technology.includes('.')) technology = technology.split('.').join('')
    return TechnologiesColors[technology as Technology]
  }
}
