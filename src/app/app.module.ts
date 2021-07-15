import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPipe } from './test.pipe';
import { TestComponentComponent } from './test-component/test-component.component';
import { FormSelfFocusComponent } from './form-self-focus/form-self-focus.component';

@Injectable()
@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    TestComponentComponent,
    FormSelfFocusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public data:any =[{name:'test'},{name:'test23'}];
  doSomething(){
    console.info('test');
  }
 }
