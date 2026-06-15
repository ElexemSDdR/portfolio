import type { Project } from '@/types'
import { Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ProjectComponent } from '@components/utilities/cards/project/project.component'
import { ApiService } from '@services/api.service'

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  portfolioApi = inject(ApiService)

  projects = toSignal(this.portfolioApi.get<Project[]>('project'), {
    initialValue: [] as Project[],
  })
}
