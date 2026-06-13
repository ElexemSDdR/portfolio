import { TranslateService } from '@/app/services/translate.service'
import { Component, inject } from '@angular/core'
import { SocialMediaSectionComponent } from '@components/core/social-media-section/social-media-section.component'
import { MarkdownComponent } from 'ngx-markdown'

@Component({
  selector: 'app-about',
  imports: [SocialMediaSectionComponent, MarkdownComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private translateService = inject(TranslateService)

  translatedAbout = this.translateService.getTranslatedAboutMe('es')
}
