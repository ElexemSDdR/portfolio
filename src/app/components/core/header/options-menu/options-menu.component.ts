import { IconsComponent } from '@/app/components/utilities/icons/icons.component'
import { ThemeService } from '@/app/services/theme.service'
import { TranslateService } from '@/app/services/translate.service'
import { Language, OptionsHeader, Theme } from '@/types'
import { Component, computed, inject, input } from '@angular/core'
import { LanguageBtnComponent } from './buttons/language/language.component'
import { ThemeBtnComponent } from './buttons/theme/theme.component'

@Component({
  selector: 'app-options-menu',
  imports: [IconsComponent, LanguageBtnComponent, ThemeBtnComponent],
  templateUrl: './options-menu.component.html',
  styleUrl: '../header.components.css',
})
export class OptionsMenuComponent {
  private themeService = inject(ThemeService)
  private translateService = inject(TranslateService)

  optionsTranslated = input.required<OptionsHeader>()

  translateButtonsAttributes = computed(() => {
    const languages = ['es', 'en']
    return this.optionsTranslated().translate.children?.map((lang, i) => {
      return {
        languageName: lang,
        language: languages[i] as Language,
      }
    })
  })

  themeButtonsAttributes = computed(() => {
    const themes = ['system', 'dark', 'light']
    return this.optionsTranslated().theme.children?.map((lang, i) => {
      return {
        themeName: lang,
        theme: themes[i] as Theme,
      }
    })
  })

  currentTheme = this.themeService.getCurrentTheme()
  currentLanguage = this.translateService.getCurrentLanguage()
}
