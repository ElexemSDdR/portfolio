import { FlagsComponent } from '@/app/components/utilities/icons/flags/flags.component'
import { TranslateService } from '@/app/services/translate.service'
import { Language } from '@/types'
import { Component, inject, input } from '@angular/core'
import { twMerge } from 'tailwind-merge'

@Component({
  selector: 'app-language-btn',
  imports: [FlagsComponent],
  templateUrl: './language.component.html',
  styleUrl: '../../../header.components.css',
})
export class LanguageBtnComponent {
  private translateService = inject(TranslateService)

  language = input.required<Language>()
  langTitle = input.required<string>()

  currentLanguage = this.translateService.getCurrentLanguage()

  changeLanguage(lang: Language) {
    this.translateService.changeLanguage(lang)
  }

  tailwindMerge = (classes: string[]) => twMerge(classes)
}
