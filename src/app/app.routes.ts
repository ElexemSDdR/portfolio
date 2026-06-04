import { IndexComponent } from '@/app/pages/index/index.component';
import { NotFoundComponent } from '@/app/pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
]
