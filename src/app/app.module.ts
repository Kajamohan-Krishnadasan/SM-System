import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './layout/login/login.component';
import { LoadingComponent } from './helpers/loading/loading.component';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { HomeComponent } from './layout/components/student/home/home.component';
import { SubjectsComponent } from './layout/components/student/subjects/subjects.component';
import { StudentComponent } from './layout/components/student/student.component';
import { AdminComponent } from './layout/components/admin/admin.component';
import { TeacherComponent } from './layout/components/teacher/teacher.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, LoadingComponent, HomeComponent, SubjectsComponent, StudentComponent, AdminComponent, TeacherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
