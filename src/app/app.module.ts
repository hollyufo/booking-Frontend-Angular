import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { HerosectionComponent } from './components/pages/herosection/herosection.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LadingpageComponent } from './components/pages/ladingpage/ladingpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoomsComponent } from './components/user/rooms/rooms.component';
import { AlluserComponent } from './components/admin/alluser/alluser.component';
import { HotelsComponent } from './components/admin/hotels/hotels.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SingleuserComponent } from './components/admin/singleuser/singleuser.component';
import { ManagerhotelComponent } from './components/manager/managerhotel/managerhotel.component';
import { ManagerroomsComponent } from './components/manager/managerrooms/managerrooms.component';
import { ReservationComponent } from './components/user/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HerosectionComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    LadingpageComponent,
    RoomsComponent,
    AlluserComponent,
    HotelsComponent,
    SingleuserComponent,
    ManagerhotelComponent,
    ManagerroomsComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
