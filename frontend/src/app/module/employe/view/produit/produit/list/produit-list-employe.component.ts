import {Component, OnInit} from '@angular/core';
import {ProduitAdminService} from 'src/app/shared/service/admin/produit/ProduitAdmin.service';
import {ProduitDto} from 'src/app/shared/model/produit/Produit.model';
import {ProduitCriteria} from 'src/app/shared/criteria/produit/ProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {CategorieProduitDto} from 'src/app/shared/model/produit/CategorieProduit.model';
import {CategorieProduitAdminService} from 'src/app/shared/service/admin/produit/CategorieProduitAdmin.service';
import {ProduitEmployeService} from "../../../../../../shared/service/employe/produit/produit-employe.service";
import {
    CategorieProduitEmployeService
} from "../../../../../../shared/service/employe/produit/categorie-produit-employe.service";


@Component({
  selector: 'app-produit-list-employe',
  templateUrl: './produit-list-employe.component.html'
})
export class ProduitListEmployeComponent extends AbstractListController<ProduitDto, ProduitCriteria, ProduitEmployeService>  implements OnInit {

    override fileName = 'Produit';


    categorieProduits: Array<CategorieProduitDto>;


    constructor( private produitService: ProduitEmployeService  , private categorieProduitService: CategorieProduitEmployeService) {
        super(produitService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Produit').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadCategorieProduit();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'categorieProduit?.libelle', header: 'Categorie produit'},
        ];
    }


    public async loadCategorieProduit(){
       this.categorieProduitService.findAllOptimized().subscribe(categorieProduits => this.categorieProduits = categorieProduits, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Categorie produit': e.categorieProduit?.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Categorie produit': this.criteria.categorieProduit?.libelle ? this.criteria.categorieProduit?.libelle : environment.emptyForExport ,
        }];
      }
}
