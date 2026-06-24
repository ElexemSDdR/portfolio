import { Experience, Language, Project, Schema } from '@/types'
import { HttpClient } from '@angular/common/http'
import { Service, inject } from '@angular/core'
import { Observable } from 'rxjs'

@Service()
export class ApiService {
  http = inject(HttpClient)
  private apiUrl = 'https://portfolio-backend-nu-lake.vercel.app/'

  get<T extends Project[] | Experience[]>(schema: Schema, lang: Language): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${schema}?lang=${lang}`)
  }
}
