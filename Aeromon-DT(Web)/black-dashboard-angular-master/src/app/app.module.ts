import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AgmCoreModule } from '@agm/core';
import { ImagesComponent } from './pages/images/images.component';
import { PlotsComponent } from './pages/plots/plots.component';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbbySqttj0ztmY74fB7rOrGhr5udabXSU'

    }),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestore,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ImagesComponent, PlotsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
