import { ApiService } from '@/app/services/api.service';
import { Experience } from '@/types';
import { Component } from '@angular/core';
import { ExperienceItemsComponent } from '@components/experience-items/experience-items.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemsComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences: Experience[]

  constructor(private portfolioApi: ApiService) {
    this.experiences = portfolioApi.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data
      },
      error: (e) => {
        console.error(e.message)
      },
      complete: () => {
        console.log('fetch completed')
      },
    })
  }
}
