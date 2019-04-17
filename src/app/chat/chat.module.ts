import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { RemoveSpecialCharPipe } from '../shared/pipe/remove-special-char-pipe';
import { ChatRouteGuardService } from './chat-route-guard.service';

@NgModule({
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe],
  providers: [ChatRouteGuardService],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path:'chat', component: ChatBoxComponent, canActivate:[ChatRouteGuardService]}
    ]),
    SharedModule
  ]
})
export class ChatModule { }
