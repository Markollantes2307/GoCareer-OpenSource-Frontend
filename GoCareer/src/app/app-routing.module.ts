import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OptionsComponent } from './components/options/options.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { LoguserComponent } from './components/loguser/loguser.component';
import { EnterComponent } from './components/enter/enter.component';
import { VerificationComponent } from './components/verification/verification.component';
import { DatesComponent } from './components/dates/dates.component';
import { TestsComponent } from './components/tests/tests.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ResultsComponent } from './components/results/results.component';
import { NpasswordComponent } from './components/npassword/npassword.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'options', component:OptionsComponent},
  {path:'enter',component:EnterComponent},
  {path:'verifica',component:VerificationComponent},
  {path: 'newuser', component:NewuserComponent},
  {path: 'specialist', component:SpecialistsComponent},
  {path: 'user', component:LoguserComponent},
  {path: 'dates', component:DatesComponent},
  {path: 'test', component:TestsComponent},
  {path: 'articles', component:ArticlesComponent},
  {path: 'results', component:ResultsComponent},
  {path:'password',component:NpasswordComponent},
  {path:'', pathMatch:'full', redirectTo:'enter'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
