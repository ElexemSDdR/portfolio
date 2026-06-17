import { Theme } from '@/types'
import { Service } from '@angular/core'

@Service()
export class ThemeService {
  private $html = document.documentElement

  changeTheme(theme: Theme) {
    window.localStorage.setItem('theme', theme)
    this.$html.style.colorScheme = theme
  }
}
