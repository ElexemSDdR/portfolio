import { ThemeService } from '@/app/services/theme.service'
import { Theme } from '@/types'
import { Component, inject } from '@angular/core'
import { IconsComponent } from '@components/utilities/icons/icons.component'

@Component({
  selector: 'app-header',
  imports: [IconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.components.css',
})
export class HeaderComponent {
  private themeService = inject(ThemeService)

  isOpen = false

  protected toggleBurguerMenu() {
    this.isOpen = !this.isOpen
  }

  protected showAndHideLinks = () => {
    const $headerLinks = document.querySelector('#header-links')
    $headerLinks?.classList.toggle('not-sm:-translate-x-96')

    if ($headerLinks?.classList.contains('not-sm:-translate-x-96') && this.isOpen) {
      this.toggleBurguerMenu()
    }
  }

  changeTheme(theme: Theme) {
    this.themeService.changeTheme(theme)
  }
}
