import { Experience, Project } from '@/types'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private apiUrl = "https://portfolio-backend-nu-lake.vercel.app/"

  get(schema: 'project' | 'experience'): Observable<Project[] | Experience[]> {
    return this.http.get<Experience[] | Project[]>(`${this.apiUrl}${schema}`)
  }
}
