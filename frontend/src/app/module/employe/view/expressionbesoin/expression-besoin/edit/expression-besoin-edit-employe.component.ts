import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ExpressionBesoinAdminService} from 'src/app/shared/service/admin/expressionbesoin/ExpressionBesoinAdmin.service';
import {ExpressionBesoinDto} from 'src/app/shared/model/expressionbesoin/ExpressionBesoin.model';
import {ExpressionBesoinCriteria} from 'src/app/shared/criteria/expressionbesoin/ExpressionBesoinCriteria.model';


import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {ExpressionBesoinDetailDto} from 'src/app/shared/model/expressionbesoin/ExpressionBesoinDetail.model';
import {ExpressionBesoinDetailAdminService} from 'src/app/shared/service/admin/expressionbesoin/ExpressionBesoinDetailAdmin.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
import {ProduitDto} from 'src/app/shared/model/produit/Produit.model';
import {ProduitAdminService} from 'src/app/shared/service/admin/produit/ProduitAdmin.service';
import {
    ExpressionBesoinEmployeService
} from "../../../../../../shared/service/employe/expressionbesoin/expression-besoin-employe.service";
import {EntiteAdminEmployeService} from "../../../../../../shared/service/employe/commun/entite-admin-employe.service";
import {EmployeEmployeService} from "../../../../../../shared/service/employe/commun/employe-employe.service";
import {
    ExpressionBesoinDetailEmployeService
} from "../../../../../../shared/service/employe/expressionbesoin/expression-besoin-detail-employe.service";
import {ProduitEmployeService} from "../../../../../../shared/service/employe/produit/produit-employe.service";

@Component({
  selector: 'app-expression-besoin-edit-employe',
  templateUrl: './expression-besoin-edit-employe.component.html'
})
export class ExpressionBesoinEditEmployeComponent extends AbstractEditController<ExpressionBesoinDto, ExpressionBesoinCriteria, ExpressionBesoinEmployeService>   implements OnInit {

    private _expressionBesoinDetailsElement = new ExpressionBesoinDetailDto();


    private _validEmployeNom = true;
    private _validEmployePrenom = true;
    private _validEntiteAdminCode = true;
    private _validEntiteAdminLibelle = true;



    constructor( private expressionBesoinService: ExpressionBesoinEmployeService , private entiteAdminService: EntiteAdminEmployeService, private expressionBesoinDetailService: ExpressionBesoinDetailEmployeService, private employeService: EmployeEmployeService, private produitService: ProduitEmployeService) {
        super(expressionBesoinService);
    }

    ngOnInit(): void {
        this.expressionBesoinDetailsElement.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);

        this.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employes = data);
        this.entiteAdmin = new EntiteAdminDto();
        this.entiteAdminService.findAll().subscribe((data) => this.entiteAdmins = data);
    }
    public override prepareEdit() {
        this.item.dateExpression = this.expressionBesoinService.format(this.item.dateExpression);
    }



    public validateExpressionBesoinDetails(){
        this.errorMessages = new Array();
    }
    public override setValidation(value: boolean){
        }
   public addExpressionBesoinDetails() {
        if( this.item.expressionBesoinDetails == null )
            this.item.expressionBesoinDetails = new Array<ExpressionBesoinDetailDto>();
       this.validateExpressionBesoinDetails();
       if (this.errorMessages.length === 0) {
            if(this.expressionBesoinDetailsElement.id == null){
                this.item.expressionBesoinDetails.push(this.expressionBesoinDetailsElement);
            }else{
                const index = this.item.expressionBesoinDetails.findIndex(e => e.id == this.expressionBesoinDetailsElement.id);
                this.item.expressionBesoinDetails[index] = this.expressionBesoinDetailsElement;
            }
          this.expressionBesoinDetailsElement = new ExpressionBesoinDetailDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteExpressionBesoinDetails(p: ExpressionBesoinDetailDto) {
        this.item.expressionBesoinDetails.forEach((element, index) => {
            if (element === p) { this.item.expressionBesoinDetails.splice(index, 1); }
        });
    }

    public editExpressionBesoinDetails(p: ExpressionBesoinDetailDto) {
        this.expressionBesoinDetailsElement = {... p};
        this.activeTab = 0;
    }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
    }




   get entiteAdmin(): EntiteAdminDto {
       return this.entiteAdminService.item;
   }
  set entiteAdmin(value: EntiteAdminDto) {
        this.entiteAdminService.item = value;
   }
   get entiteAdmins(): Array<EntiteAdminDto> {
        return this.entiteAdminService.items;
   }
   set entiteAdmins(value: Array<EntiteAdminDto>) {
        this.entiteAdminService.items = value;
   }
   get createEntiteAdminDialog(): boolean {
       return this.entiteAdminService.createDialog;
   }
  set createEntiteAdminDialog(value: boolean) {
       this.entiteAdminService.createDialog= value;
   }
   get produit(): ProduitDto {
       return this.produitService.item;
   }
  set produit(value: ProduitDto) {
        this.produitService.item = value;
   }
   get produits(): Array<ProduitDto> {
        return this.produitService.items;
   }
   set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
   }
   get createProduitDialog(): boolean {
       return this.produitService.createDialog;
   }
  set createProduitDialog(value: boolean) {
       this.produitService.createDialog= value;
   }
   get employe(): EmployeDto {
       return this.employeService.item;
   }
  set employe(value: EmployeDto) {
        this.employeService.item = value;
   }
   get employes(): Array<EmployeDto> {
        return this.employeService.items;
   }
   set employes(value: Array<EmployeDto>) {
        this.employeService.items = value;
   }
   get createEmployeDialog(): boolean {
       return this.employeService.createDialog;
   }
  set createEmployeDialog(value: boolean) {
       this.employeService.createDialog= value;
   }

    get expressionBesoinDetailsElement(): ExpressionBesoinDetailDto {
        if( this._expressionBesoinDetailsElement == null )
            this._expressionBesoinDetailsElement = new ExpressionBesoinDetailDto();
         return this._expressionBesoinDetailsElement;
    }

    set expressionBesoinDetailsElement(value: ExpressionBesoinDetailDto) {
        this._expressionBesoinDetailsElement = value;
    }


    get validEmployeNom(): boolean {
        return this._validEmployeNom;
    }
    set validEmployeNom(value: boolean) {
        this._validEmployeNom = value;
    }
    get validEmployePrenom(): boolean {
        return this._validEmployePrenom;
    }
    set validEmployePrenom(value: boolean) {
        this._validEmployePrenom = value;
    }
    get validEntiteAdminCode(): boolean {
        return this._validEntiteAdminCode;
    }
    set validEntiteAdminCode(value: boolean) {
        this._validEntiteAdminCode = value;
    }
    get validEntiteAdminLibelle(): boolean {
        return this._validEntiteAdminLibelle;
    }
    set validEntiteAdminLibelle(value: boolean) {
        this._validEntiteAdminLibelle = value;
    }
}
