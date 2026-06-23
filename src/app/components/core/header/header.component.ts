import { TranslateService } from '@/app/services/translate.service'
import { Language } from '@/types'
import { Component, computed, inject, input } from '@angular/core'
import { IconsComponent } from '@components/utilities/icons/icons.component'
import { OptionsMenuComponent } from './options-menu/options-menu.component'

@Component({
  selector: 'app-header',
  imports: [IconsComponent, OptionsMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.components.css',
})
export class HeaderComponent {
  private translateService = inject(TranslateService)
  headerLinksHref = ['/#about', '/#projects', '/#experience', '/#contact']
  language = input.required<Language>()

  translatedHeaderContent = computed(() => {
    const content = this.translateService.getTranslatedContent(this.language()).pageContent
    const {
      header: { mainLinks, options },
    } = content

    return {
      options,
      links: this.headerLinksHref.map((href, i) => {
        return {
          href,
          name: mainLinks[i],
        }
      }),
    }
  })
}
