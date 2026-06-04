import { Experience, Project } from '@/types'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private projects: Project[] = [
    {
      title: 'Calculadora de precios de amigurumis',
      url: 'https://calculadora-de-precios-de-amigurumis.vercel.app/',
      previewImage: '/projectPreviewImages/calculadora-amigurumis.png',
      description:
        'Una app web que sirve para calcular el precio de un amigurumi dependiendo el precio de la lana, hilo y más variantes, costos extras como llaveros, etc. y relleno.',
      technologies: ['HTML', 'CSS', 'TypeScript', 'EJS', 'Express.js', 'MongoDB', 'Git', 'Node.js'],
    },
  ]

  private experiences: Experience[] = [
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

  getExperiences(): Observable<any> {
    return this.http.get('')
  }
  getProjects(): Observable<Project[]> {
    return this.http.get('')
  }
}
