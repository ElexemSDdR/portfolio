import { Experience } from '@/types';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-experience-items',
  imports: [],
  templateUrl: './experience-items.component.html',
  styleUrl: './experience-items.component.css',
})
export class ExperienceItemsComponent {
  experiences = input.required<Experience[]>()
  private lastExperienceIndex = computed(() => this.experiences().length)

  doUnionLine = (index: number) => {
    if (index === 0) {
      return 'first'
    } else if (index === this.lastExperienceIndex() - 1) {
      return 'last'
    } else {
      return 'middle'
    }
  }
}
