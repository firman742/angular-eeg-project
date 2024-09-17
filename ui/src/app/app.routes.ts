import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConnectionComponent } from './connection/connection.component';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
  { path: '', component: MainComponent }, // Halaman Utama
  { path: 'connection', component: ConnectionComponent}, // Halaman koneksi
  { path: 'login', component: LoginComponent }, // Halaman Login
  { path: 'result', component: ResultComponent }, // Halaman Hasil
];
