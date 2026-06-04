import { Component } from '@angular/core';
import { FooterComponent } from '@components/footer/footer.component';
import { HeaderComponent } from '@components/header/header.component';
import { MainComponent } from '@views/main/main.component';

@Component({
  selector: 'app-index',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './index.component.html',
  styles: ``,
})
export class IndexComponent {}
