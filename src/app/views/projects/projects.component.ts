import { ProjectCardComponent } from '@/app/components/project-card/project-card.component'
import type { Project } from '@/env'
import { Component } from '@angular/core'
@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Calculadora de precios de amigurumis',
      url: 'https://calculadora-de-precios-de-amigurumis.vercel.app/',
      previewImage: '/projectPreviewImages/calculadora-amigurumis.png',
      description:
        'Una app web que sirve para sacar el precio de un amigurumi dependiendo el precio de la lana, hilo y más variantes, costos extras como llaveros y demás y relleno. Depende del peso (en Kg) del amigurumi',
      technologies: ['HTML', 'CSS', 'TypeScript', 'EJS', 'Express.js', 'MongoDB', 'Git', 'Node.js'],
    },
  ]
}
