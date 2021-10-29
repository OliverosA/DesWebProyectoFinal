import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CreateComponent } from './Create/create.component'

import { ActComponent } from './actBar/actBar.component'
import { ReadComponent } from './Read/read.component'
import { UpdateComponent } from './Update/update.component'
import { DeleteComponent } from './Delete/delete.component'
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent, 
    CreateComponent, 
    ActComponent, 
    ReadComponent, 
    UpdateComponent,
    DeleteComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
