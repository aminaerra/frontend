import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CategorieProduitAdminService} from 'src/app/shared/service/admin/produit/CategorieProduitAdmin.service';
import {CategorieProduitDto} from 'src/app/shared/model/produit/CategorieProduit.model';
import {CategorieProduitCriteria} from 'src/app/shared/criteria/produit/CategorieProduitCriteria.model';
import {
    CategorieProduitEmployeService
} from "../../../../../../shared/service/employe/produit/categorie-produit-employe.service";

@Component({
  selector: 'app-categorie-produit-view-employe',
  templateUrl: './categorie-produit-view-employe.component.html'
})
export class CategorieProduitViewEmployeComponent extends AbstractViewController<CategorieProduitDto, CategorieProduitCriteria, CategorieProduitEmployeService> implements OnInit {


    constructor(private categorieProduitService: CategorieProduitEmployeService){
        super(categorieProduitService);
    }

    ngOnInit(): void {
    }




}
