import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  declarations: [],
  imports: [
    TableModule,
    PanelModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
  ],
  exports: [
    TableModule,
    PanelModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
  ],
  providers: [],
})
export class SharedModule {}
