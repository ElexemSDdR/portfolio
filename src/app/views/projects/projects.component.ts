import { SectionContainerComponent } from '@/app/components/utilities/section-container/section-container.component'
import { TranslateService } from '@/app/services/translate.service'
import type { Project } from '@/types'
import { Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ProjectComponent } from '@components/utilities/cards/project/project.component'
import { ApiService } from '@services/api.service'

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, SectionContainerComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  private translateService = inject(TranslateService)
  private portfolioApi = inject(ApiService)
  currentLanguage = this.translateService.getCurrentLanguage()

  sectionTitle = this.translateService.getTranslatedSectionTitles().projects.title

  projects = toSignal(this.portfolioApi.get<Project[]>('project', this.currentLanguage), {
    initialValue: [] as Project[],
  })
}
