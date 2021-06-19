import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from '../clients/clients.component';
import { ClientDetailComponent } from '../clients/new-client/client-detail.component';
import { LoginComponent } from '../core/login/login.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'clients/detail',
    component: ClientDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
