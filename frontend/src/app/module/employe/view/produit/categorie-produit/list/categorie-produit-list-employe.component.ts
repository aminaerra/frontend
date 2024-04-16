import {Component, OnInit} from '@angular/core';
import {CategorieProduitAdminService} from 'src/app/shared/service/admin/produit/CategorieProduitAdmin.service';
import {CategorieProduitDto} from 'src/app/shared/model/produit/CategorieProduit.model';
import {CategorieProduitCriteria} from 'src/app/shared/criteria/produit/CategorieProduitCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';
import {
    CategorieProduitEmployeService
} from "../../../../../../shared/service/employe/produit/categorie-produit-employe.service";



@Component({
  selector: 'app-categorie-produit-list-employe',
  templateUrl: './categorie-produit-list-employe.component.html'
})
export class CategorieProduitListEmployeComponent extends AbstractListController<CategorieProduitDto, CategorieProduitCriteria, CategorieProduitEmployeService>  implements OnInit {

    override fileName = 'CategorieProduit';




    constructor( private categorieProduitService: CategorieProduitEmployeService  ) {
        super(categorieProduitService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('CategorieProduit').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
