import { Language, TranslatedContent } from '@/types'
import { Service, signal } from '@angular/core'
import type { Translate } from '@site/content/index'
import { translateAbout, translatePageContent } from '@site/content/index'

@Service()
export class TranslateService {
  private allAboutMe = signal<Translate[]>(translateAbout)
  private allPageContent = signal<Translate[]>(translatePageContent)
  private currentLanguage = (window.localStorage.getItem('language') ?? 'es') as Language

  getTranslatedContent(language: Language): TranslatedContent {
    const selectedVersion = {
      about: this.allAboutMe().find((version) => version.slug.split('/')[1].includes(language)),
      pageContent: this.allPageContent().find((version) =>
        version.slug.split('/')[1].includes(language),
      ),
    }

    return selectedVersion
  }

  getCurrentLanguage() {
    return this.currentLanguage
  }

  changeLanguage(lang: Language) {
    this.currentLanguage = lang
    window.localStorage.setItem('language', lang)
    window.location.reload()
  }
}
