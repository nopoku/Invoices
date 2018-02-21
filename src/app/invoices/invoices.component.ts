import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice/invoice';
import { InvoiceService } from '../invoice/invoice.service'
import { MessagesService } from '../messages/messages.service';



@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices: Invoice[];
  selectedInvoice: Invoice;
  
  constructor( private invoiceService: InvoiceService, private messageService: MessagesService ) { }

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices(): void {
    this.invoiceService.getInvoices()
      .subscribe(invoices=>this.invoices = invoices);
  }

  onSelect ( invoice: Invoice ): void {
    this.selectedInvoice = invoice;
    this.messageService.clear();
    if (this.selectedInvoice.paid_flag == true ) {
      this.messageService.add("This invoice is has already been paid");
    }else {
      this.messageService.add("This invoice is past due. Please make payment by " + this.selectedInvoice.due_date );
    }
  }

}
