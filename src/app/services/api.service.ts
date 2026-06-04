import { Service } from '@angular/core'
import { Experience, Project } from '@/types'
import { HttpClient } from '@angular/common/http'
import { Schema } from '@/types'
import { Observable } from 'rxjs'

@Service()
export class ApiService {
  constructor(private http: HttpClient) { }
  private apiUrl = "https://portfolio-backend-nu-lake.vercel.app/"

  get<T extends Project[] | Experience[]>(schema: Schema): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${schema}`)
  }
}
