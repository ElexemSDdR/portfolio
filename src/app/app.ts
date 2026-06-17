import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '@components/core/footer/footer.component'
import { HeaderComponent } from '@components/core/header/header.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  getDeviceTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
    return 'dark'
  }

  constructor() {
    window.localStorage.setItem('language', navigator.languages[0].split('-')[0])
    window.localStorage.setItem('theme', this.getDeviceTheme())
  }
}
