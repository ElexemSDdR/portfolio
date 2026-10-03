import { Experience, Language, Project, Resource } from '@/types'
import { HttpClient } from '@angular/common/http'
import { Service, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '@/environments/environment'

@Service()
export class ApiService {
  http = inject(HttpClient)

  get<T extends Project[] | Experience[]>(resource: Resource, lang: Language): Observable<T> {
    return this.http.get<T>(`${environment.API_URL}/${resource}`)
  }
}
