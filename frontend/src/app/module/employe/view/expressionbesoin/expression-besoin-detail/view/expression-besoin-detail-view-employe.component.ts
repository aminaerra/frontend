import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ExpressionBesoinDetailAdminService} from 'src/app/shared/service/admin/expressionbesoin/ExpressionBesoinDetailAdmin.service';
import {ExpressionBesoinDetailDto} from 'src/app/shared/model/expressionbesoin/ExpressionBesoinDetail.model';
import {ExpressionBesoinDetailCriteria} from 'src/app/shared/criteria/expressionbesoin/ExpressionBesoinDetailCriteria.model';

import {ExpressionBesoinDto} from 'src/app/shared/model/expressionbesoin/ExpressionBesoin.model';
import {ExpressionBesoinAdminService} from 'src/app/shared/service/admin/expressionbesoin/ExpressionBesoinAdmin.service';
import {ProduitDto} from 'src/app/shared/model/produit/Produit.model';
import {ProduitAdminService} from 'src/app/shared/service/admin/produit/ProduitAdmin.service';
import {
    ExpressionBesoinDetailEmployeService
} from "../../../../../../shared/service/employe/expressionbesoin/expression-besoin-detail-employe.service";
import {ProduitEmployeService} from "../../../../../../shared/service/employe/produit/produit-employe.service";
import {
    ExpressionBesoinEmployeService
} from "../../../../../../shared/service/employe/expressionbesoin/expression-besoin-employe.service";
@Component({
  selector: 'app-expression-besoin-detail-view-employe',
  templateUrl: './expression-besoin-detail-view-employe.component.html'
})
export class ExpressionBesoinDetailViewEmployeComponent extends AbstractViewController<ExpressionBesoinDetailDto, ExpressionBesoinDetailCriteria, ExpressionBesoinDetailEmployeService> implements OnInit {


    constructor(private expressionBesoinDetailService: ExpressionBesoinDetailEmployeService, private expressionBesoinService: ExpressionBesoinEmployeService, private produitService: ProduitEmployeService){
        super(expressionBesoinDetailService);
    }

    ngOnInit(): void {
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
    get expressionBesoin(): ExpressionBesoinDto {
       return this.expressionBesoinService.item;
    }
    set expressionBesoin(value: ExpressionBesoinDto) {
        this.expressionBesoinService.item = value;
    }
    get expressionBesoins(): Array<ExpressionBesoinDto> {
       return this.expressionBesoinService.items;
    }
    set expressionBesoins(value: Array<ExpressionBesoinDto>) {
        this.expressionBesoinService.items = value;
    }


}
