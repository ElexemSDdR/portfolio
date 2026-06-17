import { Theme } from '@/types'
import { Service } from '@angular/core'

@Service()
export class ThemeService {
  changeTheme(theme: Theme) {
    window.localStorage.setItem('theme', theme)
  }
}
