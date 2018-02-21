import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceService } from './invoice/invoice.service';
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from './messages/messages.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    InvoiceDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    InvoiceService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
