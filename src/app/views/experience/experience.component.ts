import { ApiService } from '@services/api.service';
import { Experience } from '@/types';
import { Component, inject, Signal } from '@angular/core';
import { ExperienceItemsComponent } from '@components/utilities/experience-items/experience-items.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemsComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  apiPortfolio = inject(ApiService)
  experiences: Signal<Experience[]> = toSignal(this.apiPortfolio.get('experience'), { initialValue: [] as Experience[] })
}
