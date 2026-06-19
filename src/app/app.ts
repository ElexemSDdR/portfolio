import { Theme } from '@/types'
import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '@components/core/footer/footer.component'
import { HeaderComponent } from '@components/core/header/header.component'
import { ThemeService } from '@services/theme.service'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private themeService = inject(ThemeService)
  private currentTheme = (window.localStorage.getItem('theme') ??
    this.themeService.getDeviceTheme()) as Theme

  constructor() {
    window.localStorage.setItem('language', navigator.languages[0].split('-')[0])
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      this.themeService.changeTheme('system')
    })

    this.themeService.changeTheme(this.currentTheme)
  }
}
