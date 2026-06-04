import { ApiService } from '@/app/services/api.service';
import { Experience } from '@/types';
import { Component } from '@angular/core';
import { ExperienceItemsComponent } from '@components/utilities/experience-items/experience-items.component';
import { Observable } from 'rxjs/internal/Observable'

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemsComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences: Experience[] = []
  req: Observable<Experience[]>

  constructor(private portfolioApi: ApiService) {
    this.req = this.portfolioApi.get('experience') as Observable<Experience[]>
    this.req.subscribe({
      next: (data: Experience[]) => {
        this.experiences = data
      },
      error: (error) => {},
      complete: () => {}
      })
  }
  }
