import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.components.css',
})
export class HeaderComponent {
  isOpen = false

  protected toggle() {
    this.isOpen = !this.isOpen
  }

  protected showAndHideLinks = () => {
    const $headerLinks = document.querySelector('#headerLinks')
    $headerLinks?.classList.toggle('not-sm:-translate-x-96')

    if ($headerLinks?.classList.contains('not-sm:-translate-x-96') && this.isOpen) {
      this.toggle()
    }
  }
}
