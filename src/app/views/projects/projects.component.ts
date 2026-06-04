import { ApiService } from '@services/api.service'
import type { Project } from '@/types'
import { Component } from '@angular/core'
import { ProjectCardComponent } from '@components/utilities/project-card/project-card.component'

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private portfolioApi: ApiService) {
    this.portfolioApi.get<Project[]>('project').subscribe({
      next: (data: Project[]) => {
        this.projects = data
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => { }
    })
  }
}
