import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { ExpressionBesoinDetailCreateEmployeComponent } from './expression-besoin-detail/create/expression-besoin-detail-create-employe.component';
import { ExpressionBesoinDetailEditEmployeComponent } from './expression-besoin-detail/edit/expression-besoin-detail-edit-employe.component';
import { ExpressionBesoinDetailViewEmployeComponent } from './expression-besoin-detail/view/expression-besoin-detail-view-employe.component';
import { ExpressionBesoinDetailListEmployeComponent } from './expression-besoin-detail/list/expression-besoin-detail-list-employe.component';
import { ExpressionBesoinCreateEmployeComponent } from './expression-besoin/create/expression-besoin-create-employe.component';
import { ExpressionBesoinEditEmployeComponent } from './expression-besoin/edit/expression-besoin-edit-employe.component';
import { ExpressionBesoinViewEmployeComponent } from './expression-besoin/view/expression-besoin-view-employe.component';
import { ExpressionBesoinListEmployeComponent } from './expression-besoin/list/expression-besoin-list-employe.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    ExpressionBesoinDetailCreateEmployeComponent,
    ExpressionBesoinDetailListEmployeComponent,
    ExpressionBesoinDetailViewEmployeComponent,
    ExpressionBesoinDetailEditEmployeComponent,
    ExpressionBesoinCreateEmployeComponent,
    ExpressionBesoinListEmployeComponent,
    ExpressionBesoinViewEmployeComponent,
    ExpressionBesoinEditEmployeComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,

  ],
  exports: [
  ExpressionBesoinDetailCreateEmployeComponent,
  ExpressionBesoinDetailListEmployeComponent,
  ExpressionBesoinDetailViewEmployeComponent,
  ExpressionBesoinDetailEditEmployeComponent,
  ExpressionBesoinCreateEmployeComponent,
  ExpressionBesoinListEmployeComponent,
  ExpressionBesoinViewEmployeComponent,
  ExpressionBesoinEditEmployeComponent,
  ],
})
export class ExpressionbesoinEmployeModule { }
