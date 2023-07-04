import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './layout/login/login.component';
import { LoadingComponent } from './helpers/loading/loading.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './layout/components/student/home/home.component';
import { SubjectsComponent } from './layout/components/student/subjects/subjects.component';
import { AdminComponent } from './layout/components/admin/admin.component';
import { TeacherComponent } from './layout/components/teacher/teacher.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SidebarComponent } from './layout/dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './layout/dashboard/header/header.component';
import { FooterComponent } from './layout/dashboard/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    LoginComponent,
    LoadingComponent,
    HomeComponent,
    SubjectsComponent,
    AdminComponent,
    TeacherComponent,
    HeaderComponent,
    FooterComponent,
  ],
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
