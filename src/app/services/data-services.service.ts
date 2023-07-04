import { Injectable } from '@angular/core';
import { Cleark } from '../models/cleark';
import { Principal } from '../models/principal';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root',
})
export class DataServicesService {
  student!: Student;
  principal!: Principal;
  teacher!: Teacher;
  cleark!: Cleark;

  constructor() {}
}
