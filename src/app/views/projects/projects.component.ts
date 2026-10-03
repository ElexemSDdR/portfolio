import { SectionContainerComponent } from '@/app/components/utilities/section-container/section-container.component'
import { TranslateService } from '@/app/services/translate.service'
import type { Project } from '@/types'
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core'
import { ProjectComponent } from '@components/utilities/cards/project/project.component'
import { ApiService } from '@services/api.service'

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, SectionContainerComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent implements OnInit {
  private translateService = inject(TranslateService)
  private portfolioApi = inject(ApiService)
  private cdr = inject(ChangeDetectorRef)

  projects: Project[] = []
  currentLanguage = this.translateService.getCurrentLanguage()

  sectionTitle = this.translateService.getTranslatedSectionTitles().projects.title

  ngOnInit(): void {
    this.portfolioApi.get<Project[]>('project', this.currentLanguage).subscribe({
      next: (data) => {
        this.projects = data
      },
      error: (error: unknown) => {
        console.error(error)
      },
      complete: () => {
        this.cdr.detectChanges()
      }
    })
  }
}

