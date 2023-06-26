import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { OptionsComponent } from './components/options/options.component';
import { SpecialistsComponent } from './components/specialists/specialists.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoguserComponent } from './components/loguser/loguser.component';
import { EnterComponent } from './components/enter/enter.component';
import { VerificationComponent } from './components/verification/verification.component';
import { DatesComponent } from './components/dates/dates.component';
import { TestsComponent } from './components/tests/tests.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ResultsComponent } from './components/results/results.component';
import { NpasswordComponent } from './components/npassword/npassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewuserComponent,
    OptionsComponent,
    SpecialistsComponent,
    LoguserComponent,
    EnterComponent,
    VerificationComponent,
    DatesComponent,
    TestsComponent,
    ArticlesComponent,
    ResultsComponent,
    NpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
