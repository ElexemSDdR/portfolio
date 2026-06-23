import { IconsComponent } from '@/app/components/utilities/icons/icons.component'
import { ThemeService } from '@/app/services/theme.service'
import { Theme } from '@/types'
import { Component, inject, input } from '@angular/core'
import { twMerge } from 'tailwind-merge'

@Component({
  selector: 'app-theme-btn',
  imports: [IconsComponent],
  templateUrl: './theme.component.html',
  styleUrl: '../../../header.components.css',
})
export class ThemeBtnComponent {
  private themeService = inject(ThemeService)

  theme = input.required<Theme>()
  themeName = input.required<string>()
  className = input<string>()

  currentTheme = this.themeService.getCurrentTheme()

  changeTheme(theme: Theme) {
    this.themeService.changeTheme(theme)
    window.location.reload()
  }

  tailwindMerge = (classes: string[]) => twMerge(classes)
}
