import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from "../invoice/invoice";

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  @Input() invoice:Invoice;

  constructor() { }

  ngOnInit() {
  }

}
