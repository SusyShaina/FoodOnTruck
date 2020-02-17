import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';
import { AboutComponent }  from './about/about.component';
import { MenuComponent }  from './menu/menu.component';
import { ServiceComponent }  from './service/service.component';
import { TeamComponent }  from './team/team.component';
import { ContactComponent }  from './contact/contact.component';
import { HomeComponent }  from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'menu', component: MenuComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule{ }
