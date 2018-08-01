import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';


const routes: Routes = [
  {
    path: '',
    component: TestComponent
  },
  {
    path: 'test2',
    component: Test2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
