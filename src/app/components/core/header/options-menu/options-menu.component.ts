import { FlagsComponent } from '@/app/components/utilities/icons/flags/flags.component'
import { IconsComponent } from '@/app/components/utilities/icons/icons.component'
import { ThemeService } from '@/app/services/theme.service'
import { TranslateService } from '@/app/services/translate.service'
import { Language, Theme } from '@/types'
import { Component, inject } from '@angular/core'

@Component({
  selector: 'app-options-menu',
  imports: [IconsComponent, FlagsComponent],
  templateUrl: './options-menu.component.html',
  styleUrl: '../header.components.css',
})
export class OptionsMenuComponent {
  private themeService = inject(ThemeService)
  private translateService = inject(TranslateService)

  currentTheme = this.themeService.getCurrentTheme()
  currentLanguage = this.translateService.getCurrentLanguage()

  changeTheme(theme: Theme) {
    this.themeService.changeTheme(theme)
    window.location.reload()
  }

  changeLanguage(lang: Language) {
    this.translateService.changeLanguage(lang)
  }
}
