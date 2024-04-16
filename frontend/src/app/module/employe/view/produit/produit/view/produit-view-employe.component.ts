import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ProduitAdminService} from 'src/app/shared/service/admin/produit/ProduitAdmin.service';
import {ProduitDto} from 'src/app/shared/model/produit/Produit.model';
import {ProduitCriteria} from 'src/app/shared/criteria/produit/ProduitCriteria.model';

import {CategorieProduitDto} from 'src/app/shared/model/produit/CategorieProduit.model';
import {CategorieProduitAdminService} from 'src/app/shared/service/admin/produit/CategorieProduitAdmin.service';
import {ProduitEmployeService} from "../../../../../../shared/service/employe/produit/produit-employe.service";
import {
    CategorieProduitEmployeService
} from "../../../../../../shared/service/employe/produit/categorie-produit-employe.service";
@Component({
  selector: 'app-produit-view-employe',
  templateUrl: './produit-view-employe.component.html'
})
export class ProduitViewEmployeComponent extends AbstractViewController<ProduitDto, ProduitCriteria, ProduitEmployeService> implements OnInit {


    constructor(private produitService: ProduitEmployeService, private categorieProduitService: CategorieProduitEmployeService){
        super(produitService);
    }

    ngOnInit(): void {
    }


    get categorieProduit(): CategorieProduitDto {
       return this.categorieProduitService.item;
    }
    set categorieProduit(value: CategorieProduitDto) {
        this.categorieProduitService.item = value;
    }
    get categorieProduits(): Array<CategorieProduitDto> {
       return this.categorieProduitService.items;
    }
    set categorieProduits(value: Array<CategorieProduitDto>) {
        this.categorieProduitService.items = value;
    }


}
