import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { PollsComponent } from "./polls/polls.component";
import { CreateComponent } from "./create/create.component";
import { LikedComponent } from "./liked/liked.component";
import { AuthGuard } from "./core/auth.guard";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    component: PollsComponent
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'liked',
    component: LikedComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
