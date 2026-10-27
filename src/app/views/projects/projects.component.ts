import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core'
import { SectionContainerComponent } from '@components/utilities/section-container/section-container.component'
import { ProjectComponent } from '@components/utilities/cards/project/project.component'
import { TranslateService } from '@services/translate.service'
import { ApiService } from '@services/api.service'
import type { Project } from '@/types'

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
  isPending = true
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
        this.isPending = false
        this.cdr.detectChanges()
      }
    })
  }
}

