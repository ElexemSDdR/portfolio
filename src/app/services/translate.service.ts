import { PossibleLanguages } from '@/types'
import { Service, signal } from '@angular/core'
import type { About } from '@site/content/index'
import { about } from '@site/content/index'

@Service()
export class TranslateService {
  private allAboutMe = signal<About[]>(about)

  getTranslatedAboutMe(language: PossibleLanguages): About {
    const allVersions = this.allAboutMe()
    const selected = allVersions.find((version) => version.slug.split('/')[1].includes(language))
    return selected
  }
}
