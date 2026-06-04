import { type Technology, AnimateSide, Project, TechnologiesColors } from '@/types';
import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconsComponent } from '@components/utilities/icons/icons.component';

@Component({
  selector: 'app-project-card',
  imports: [IconsComponent, NgOptimizedImage],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  project = input.required<Project>()
  animateSide = input.required<AnimateSide>()

  technologyClass = (technology: string) => {
    if (technology.includes('.')) technology = technology.split('.').join('')
    return `rounded-full py-1 px-3 text-sm align-middle text-center ${TechnologiesColors[technology as Technology]}`
  }
}
