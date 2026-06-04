import { ApiService } from '@/app/services/api.service'
import type { Project } from '@/types'
import { Component } from '@angular/core'
import { ProjectCardComponent } from '@components/utilities/project-card/project-card.component'
import { Observable } from 'rxjs/internal/Observable'
@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  projects: Observable<Project[]>

  constructor(private portfolioApi: ApiService) {
    this.projects = portfolioApi.getProjects()
  }
}
