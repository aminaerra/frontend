import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
import {
    ExpressionBesoinDetailEmployeService
} from "../../../../../../shared/service/employe/expressionbesoin/expression-besoin-detail-employe.service";
import {EmployeEmployeService} from "../../../../../../shared/service/employe/commun/employe-employe.service";
import {ProduitEmployeService} from "../../../../../../shared/service/employe/produit/produit-employe.service";
@Component({
  selector: 'app-expression-besoin-view-employe',
  templateUrl: './expression-besoin-view-employe.component.html'
})
export class ExpressionBesoinViewEmployeComponent extends AbstractViewController<ExpressionBesoinDto, ExpressionBesoinCriteria, ExpressionBesoinEmployeService> implements OnInit {

    expressionBesoinDetails = new ExpressionBesoinDetailDto();
    expressionBesoinDetailss: Array<ExpressionBesoinDetailDto> = [];

    constructor(private expressionBesoinService: ExpressionBesoinEmployeService, private entiteAdminService: EntiteAdminEmployeService, private expressionBesoinDetailService: ExpressionBesoinDetailEmployeService, private employeService: EmployeEmployeService, private produitService: ProduitEmployeService){
        super(expressionBesoinService);
    }

    ngOnInit(): void {
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


}
