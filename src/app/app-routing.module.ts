import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'contact-app',component:ContactComponent},
  {path:'flow',component:WorkflowComponent},
  {path:'chart-column',component:ColumnChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
