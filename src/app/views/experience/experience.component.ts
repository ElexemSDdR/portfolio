import { SectionContainerComponent } from '@/app/components/utilities/section-container/section-container.component'
import { Experience } from '@/types'
import { Component, inject, Signal } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ExperienceItemsComponent } from '@components/utilities/experience-items/experience-items.component'
import { ApiService } from '@services/api.service'

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemsComponent, SectionContainerComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  apiPortfolio = inject(ApiService)
  experiences: Signal<Experience[]> = toSignal(this.apiPortfolio.get('experience'), {
    initialValue: [] as Experience[],
  })
}
