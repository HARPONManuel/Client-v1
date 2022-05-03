import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './component/admin/admin.module';
import { JwtInterceptorService } from './component/admin/services/jwt-interceptor.service';
import { JwtUnAuthorizedInterceptorService } from './component/admin/services/jwt-un-authorized-interceptor.service';
import { LoginComponent } from './component/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>
        {
          return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null)
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtUnAuthorizedInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
