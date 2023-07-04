import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'student',
        loadChildren: () =>
          import('./layout/components/student/student.module').then(
            (m) => m.StudentModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./layout/components/admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      {
        path: 'teacher',
        loadChildren: () =>
          import('./layout/components/teacher/teacher.module').then(
            (m) => m.TeacherModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
