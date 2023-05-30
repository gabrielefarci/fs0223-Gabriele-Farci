import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './pages/post-non-attivi/post-non-attivi.component';

const routes: Routes = [
  {
    path: 'post-attivi',
    component: PostAttiviComponent
  },
  {
    path: 'post-non-attivi',
    component: PostNonAttiviComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
