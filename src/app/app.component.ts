import { Component, ViewChild } from '@angular/core';
import { AppModule } from './app.module';
import { TestComponentComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("testComponent") testComponent?: TestComponentComponent;
  showForm: boolean = false;
  constructor(public mod: AppModule) {
    mod.doSomething();

  }
  title = 'my-app';

}
