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
      next: (data: Experience[]) => {
        this.experiences = data.sort((older, newer) => {
          const firstStartDate = older.date.split('-').map((dates) => dates.trim())[0]
          const firstEndDate = older.date.split('-').map((dates) => dates.trim())[1]

          const secondStartDate = newer.date.split('-').map((dates) => dates.trim())[0]
          const secondEndDate = newer.date.split('-').map((dates) => dates.trim())[1]

          if (firstEndDate === 'Actual' || secondEndDate === 'Actual') return -999999

          return Number(secondStartDate) - Number(firstStartDate)
        })
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
