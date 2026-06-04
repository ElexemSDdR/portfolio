import { MainComponent } from '@/app/views/main/main.component';
import { NotFoundComponent } from '@/app/pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]
