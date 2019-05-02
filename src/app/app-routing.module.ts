import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  // {path: 'main', component: MainComponent,
  //   children: [
  //     {path: '', redirectTo: 'carousel', pathMatch: 'full'},
  //     {path: 'carousel', component: CarouselComponent},
  //     {path: 'dailySpecials', component: DailySpecialsComponent},
  //     {path: '**', component: PageNotFoundComponent}
  // ] },
  {path: 'main', component: MainComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
