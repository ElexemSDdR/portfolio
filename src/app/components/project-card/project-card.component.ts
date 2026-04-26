import { type Technology, AnimateSide, Project, TechnologiesColors } from '@/env.d'
import { Component, input } from '@angular/core'
import { IconsComponent } from '../icons/icons.component'

@Component({
  selector: 'app-project-card',
  imports: [IconsComponent],
  templateUrl: './project-card.component.html',
  styles: ``,
})
export class ProjectCardComponent {
  project = input.required<Project>()
  animateSide = input.required<AnimateSide>()

  bgColorForTechnology = (technology: string) => {
    if (technology.includes('.')) technology = technology.split('.').join('')
    return TechnologiesColors[technology as Technology]
  }
}
