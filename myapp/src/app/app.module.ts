import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { HttpClientModule } from '@angular/common/http';
import { RetriveDataComponent } from './retrive-data/retrive-data.component';
import { JwtTokenComponent } from './jwt-token/jwt-token.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DataComponent,
    ReactiveComponent,
    FormBuilderComponent,
    TestObservableComponent,
    RetriveDataComponent,
    JwtTokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [ColorComponent]
})
export class AppModule { }
