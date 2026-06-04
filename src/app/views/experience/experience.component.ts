import { ApiService } from '@services/api.service';
import { Experience } from '@/types';
import { Component } from '@angular/core';
import { ExperienceItemsComponent } from '@components/utilities/experience-items/experience-items.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemsComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences: Experience[] = []

  constructor(private portfolioApi: ApiService) {
    this.portfolioApi.get<Experience[]>('experience').subscribe({
      next: (data: Experience[]) => {
        this.experiences = data
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => { }
    })
  }
}
