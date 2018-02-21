import { Injectable } from '@angular/core';
import { Invoice } from './invoice';
import { INVOICES } from '../invoices/mock-invoices';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of';
import { MessagesService } from '../messages/messages.service';


@Injectable()
export class InvoiceService {

  constructor(private messageService: MessagesService ) { }

  getInvoices(): Observable<Invoice[]> {
    //this.messageService.add( 'Queried active invoices');
    return of(INVOICES);
  }

}
