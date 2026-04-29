import { ExperienceItemsComponent } from '@/app/components/experience-items/experience-items.component'
import { Component } from '@angular/core'

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemsComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences = [
    {
      jobName: 'La Vianda de Martina (proyecto freelance)',
      date: '2025 - Actual',
      jobPosition:
        'Desarrollador full-stack y diseñador de una página e-commerce e informativa para un emprendimiento, "La vianda de Martina". Proyecto pago en el que diseño la interfaz de la página, la estructura de código y base de datos completa.',
    },
    {
      jobName: 'Nanotorrent (proyecto freelance)',
      date: '2024 - 2025',
      jobPosition:
        'Desarrollador full-stack de la página de descarga de programas gratuitos Nanotorrent. Trabajé junto con otra persona para la clonación de la conocida página de Gamestorrent, utilizando su diseño como base para una decoración propia. El mismo fue abandonado por un tiempo.',
    },
  ]
}
