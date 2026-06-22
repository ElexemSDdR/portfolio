import { SocialMediaButtonComponent } from '@/app/components/utilities/social-media-button/social-media-button.component'
import { TranslateService } from '@/app/services/translate.service'
import { AboutMeContent, Languages, SocialNetwork } from '@/types'
import { Component, inject } from '@angular/core'
import { MarkdownComponent } from 'ngx-markdown'

@Component({
  selector: 'app-about',
  imports: [MarkdownComponent, SocialMediaButtonComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  private translateService = inject(TranslateService)
  private preferredLanguage = (window.localStorage.getItem('language') as Languages) ?? 'es'

  translatedAbout: AboutMeContent = this.translateService.getTranslatedAboutMe(
    this.preferredLanguage,
  )
  socialNetworks = Object.keys(this.translatedAbout.socialMedia) as SocialNetwork[]
}
