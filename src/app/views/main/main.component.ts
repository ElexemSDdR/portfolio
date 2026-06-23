import { Language } from '@/types'
import { Component } from '@angular/core'
import { AboutComponent } from '@views/about/about.component'
import { ContactComponent } from '@views/contact/contact.component'
import { ExperienceComponent } from '@views/experience/experience.component'
import { ProjectsComponent } from '@views/projects/projects.component'

@Component({
  selector: 'app-main',
  imports: [ProjectsComponent, ExperienceComponent, AboutComponent, ContactComponent],
  templateUrl: './main.component.html',
  styles: ``,
})
export class MainComponent {
  currentLanguage: Language = 'en'
}
