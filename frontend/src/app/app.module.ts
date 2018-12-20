import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule,
  MatDialogModule,
  MatMenuModule, MatSidenavModule, MatListModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FoodsService } from './foods.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormComponent } from './components/create/form/form.component';
import { DialograteComponent } from './components/list/dialograte/dialograte.component';
import { LoginComponent } from './components/login/login.component';

enableProdMode();

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // home
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    EditComponent,
    ListComponent,
    NotfoundComponent,
    FormComponent,
    DialograteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    AngularFireModule.initializeApp(
      // Initialize Firebase
      {
        apiKey: 'AIzaSyAw6HRPPUD0LCNVP4thQJWtik_yF1SjMDY',
        authDomain: 'starsipe-8cb0e.firebaseapp.com',
        databaseURL: 'https://starsipe-8cb0e.firebaseio.com',
        projectId: 'starsipe-8cb0e',
        storageBucket: 'starsipe-8cb0e.appspot.com',
        messagingSenderId: '412941641518'
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,


  ],
  providers: [FoodsService],
  bootstrap: [AppComponent],
  entryComponents: [DialograteComponent] // in order to use as dialog
})
export class AppModule { }
