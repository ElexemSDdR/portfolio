import { Language, Resource } from '@/types'
import { HttpClient } from '@angular/common/http'
import { Service, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '@/environments/environment'

@Service()
export class ApiService {
  http = inject(HttpClient)
  private API_URL = environment.API_URL

  get<T>(resource: Resource, _lang: Language): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${resource}`)
  }
}
