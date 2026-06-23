import { SectionContainerComponent } from '@/app/components/utilities/section-container/section-container.component'
import { TranslateService } from '@/app/services/translate.service'
import { Component, inject } from '@angular/core'

@Component({
  selector: 'app-contact',
  imports: [SectionContainerComponent],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  private translateService = inject(TranslateService)
  currentLanguage = this.translateService.getCurrentLanguage()

  sectionTitle = this.translateService.getTranslatedSectionTitles().contact.title
}
