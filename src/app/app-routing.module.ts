import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { PortfoloyComponent } from './portfoloy/portfoloy.component';
import { TabBordComponent } from './tab-bord/tab-bord.component';

const routes: Routes = [
  {path:'about', component: PortfoloyComponent},
  {path:'services', component: TabBordComponent},
  {path:'contact', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
