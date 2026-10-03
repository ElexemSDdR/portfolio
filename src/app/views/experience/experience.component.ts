import { SectionContainerComponent } from '@/app/components/utilities/section-container/section-container.component'
import { TranslateService } from '@/app/services/translate.service'
import { Experience } from '@/types'
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core'
import { ExperienceItemsComponent } from '@components/utilities/experience-items/experience-items.component'
import { ApiService } from '@services/api.service'

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemsComponent, SectionContainerComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements OnInit {
  private apiPortfolio = inject(ApiService)
  private translateService = inject(TranslateService)
  private cdr = inject(ChangeDetectorRef)
  currentLanguage = this.translateService.getCurrentLanguage()

  sectionTitle = this.translateService.getTranslatedSectionTitles().experience.title

  experiences: Experience[] = []

  ngOnInit(): void {
    this.apiPortfolio.get<Experience[]>('experience', this.currentLanguage).subscribe({
      next: (data) => {
        this.experiences = data
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
