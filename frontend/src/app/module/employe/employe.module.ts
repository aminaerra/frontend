import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {EmployeRoutingModule} from './employe-routing.module';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {TabViewModule} from "primeng/tabview";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CalendarModule} from "primeng/calendar";
import {PanelModule} from "primeng/panel";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {InputNumberModule} from "primeng/inputnumber";
import {BadgeModule} from "primeng/badge";
import {MultiSelectModule} from "primeng/multiselect";
import {SecurityModule} from "../security/security.module";
import {SecurityRoutingModule} from "../security/security-routing.module";
import {LoginEmployeComponent} from './login-employe/login-employe.component';
import {RegisterEmployeComponent} from './register-employe/register-employe.component';
import {CommunEmployeModule} from "./view/commun/commun-employe.module";
import {CommunEmployeRoutingModule} from "./view/commun/commun-employe-routing.module";
import {ExpressionbesoinEmployeModule} from "./view/expressionbesoin/expressionbesoin-employe.module";
import {ExpressionbesoinEmployeRoutingModule} from "./view/expressionbesoin/expressionbesoin-employe-routing.module";
import {MandatEmployeModule} from "./view/mandat/mandat-employe.module";
import {MandatEmployeRoutingModule} from "./view/mandat/mandat-employe-routing.module";
import {ProduitEmployeModule} from "./view/produit/produit-employe.module";
import {ProduitEmployeRoutingModule} from "./view/produit/produit-employe-routing.module";


@NgModule({
  declarations: [
      LoginEmployeComponent,
      RegisterEmployeComponent
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

      ExpressionbesoinEmployeModule,
      ExpressionbesoinEmployeRoutingModule,
      ProduitEmployeModule,
      ProduitEmployeRoutingModule,
      MandatEmployeModule,
      MandatEmployeRoutingModule,
      CommunEmployeModule,
      CommunEmployeRoutingModule,
      SecurityModule,
      SecurityRoutingModule,

    EmployeRoutingModule
  ],
    exports: [

        LoginEmployeComponent,
        RegisterEmployeComponent,
        ExpressionbesoinEmployeModule,
        ProduitEmployeModule,
        MandatEmployeModule,
        CommunEmployeModule,
        SecurityModule
    ],
})
export class EmployeModule { }
