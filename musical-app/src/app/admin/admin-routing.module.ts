import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BandaFormComponent } from './components/banda-form/banda-form.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: BandaFormComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
