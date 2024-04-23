import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[]=[
   new  SalesPerson("Om Prakash","Peddamdathala","omprakashornold@gmail.com",50000),
   new  SalesPerson("Pravlika","Peddamdathala","pravlikaornold@gmail.com",10000),
   new  SalesPerson("Manjula","Peddamdathala","manjulaornold@gmail.com",8000),
   new  SalesPerson("Preethi","Peddamdathala","preethiornold@gmail.com",5000),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
