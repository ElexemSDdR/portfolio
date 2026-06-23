import { Theme } from '@/types'
import { Service } from '@angular/core'

@Service()
export class ThemeService {
  private $html = document.documentElement

  getDeviceTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
    return 'dark'
  }

  getCurrentTheme(): Theme {
    return (window.localStorage.getItem('theme') ?? 'system') as Theme
  }

  changeTheme(theme: Theme) {
    if (theme === 'system') {
      const systemTheme = this.getDeviceTheme()
      window.localStorage.setItem('theme', 'system')
      this.$html.style.colorScheme = systemTheme
      return
    }
    window.localStorage.setItem('theme', theme)
    this.$html.style.colorScheme = theme
    return
  }
}
