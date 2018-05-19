import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AppRoutingModule } from './/app-routing.module';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { PropuestaDetailComponent } from './propuesta-detail/propuesta-detail.component';
import { DataTeamComponent } from './data-team/data-team.component';
import { VisionMisionComponent } from './vision-mision/vision-mision.component';
import { TeamValuesComponent } from './team-values/team-values.component';
import { TeamMembersComponent } from './team-members/team-members.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    PropuestasComponent,
    PropuestaDetailComponent,
    DataTeamComponent,
    VisionMisionComponent,
    TeamValuesComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
