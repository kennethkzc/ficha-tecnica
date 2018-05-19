import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import  {PropuestaDetailComponent } from './propuesta-detail/propuesta-detail.component';
import { DataTeamComponent } from './data-team/data-team.component';
import {TeamMembersComponent} from './team-members/team-members.component';


const routes:Routes=[
  { path: '', redirectTo: '/introduction', pathMatch: 'full'},
  { path: 'introduction', component: IntroductionComponent},
  { path: 'propuestas', component: PropuestasComponent},
  { path: 'detail/:id', component: PropuestaDetailComponent },
  { path: 'dataTeam', component: DataTeamComponent},
  { path: 'teamMembers', component: TeamMembersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
