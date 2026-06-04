import { ApiService } from '@services/api.service'
import type { Project } from '@/types'
import { Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ProjectCardComponent } from '@components/utilities/project-card/project-card.component'

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  portfolioApi = inject(ApiService)

  projects = toSignal(
    this.portfolioApi.get<Project[]>('project'),
    { initialValue: [] as Project[] }
  )
}
