import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  imports:[CommonModule,FormsModule, TableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'], // Fixed path to styleUrls
})
export class TableComponent {
  @Input() columns: any[] = []; // Columns config array
  @Input() data: any[] = []; // Row data array
  @Input() loading: boolean = false;
  @Input() globalFilterFields: string[] = [];
  @Input() rowsPerPageOptions: number[] = [5, 10, 20];
  @Input() rows: number = 10;
  @Input() sortField: string = '';
  @Input() sortOrder: number = 1;
  @Input() tableHeight: string = '500px';

  @Input() actionTemplate?: TemplateRef<any>; // Template for actions

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onView = new EventEmitter<any>();


  
}
