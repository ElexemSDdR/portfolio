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

  changeTheme(theme: Theme) {
    this.themeService.changeTheme(theme)
  }
}
