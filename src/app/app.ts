import { Component } from '@angular/core'
import { HeaderComponent } from '@components/header/header.component'
import { FooterComponent } from '@components/footer/footer.component'
import { MainComponent } from './views/main/main.component'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
