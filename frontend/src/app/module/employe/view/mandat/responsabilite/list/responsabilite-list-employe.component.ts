import {Component, OnInit} from '@angular/core';
import {ResponsabiliteAdminService} from 'src/app/shared/service/admin/mandat/ResponsabiliteAdmin.service';
import {ResponsabiliteDto} from 'src/app/shared/model/mandat/Responsabilite.model';
import {ResponsabiliteCriteria} from 'src/app/shared/criteria/mandat/ResponsabiliteCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';
import {
    ResponsabiliteEmployeService
} from "../../../../../../shared/service/employe/mandat/responsabilite-employe.service";



@Component({
  selector: 'app-responsabilite-list-employe',
  templateUrl: './responsabilite-list-employe.component.html'
})
export class ResponsabiliteListEmployeComponent extends AbstractListController<ResponsabiliteDto, ResponsabiliteCriteria, ResponsabiliteEmployeService>  implements OnInit {

    override fileName = 'Responsabilite';




    constructor( private responsabiliteService: ResponsabiliteEmployeService  ) {
        super(responsabiliteService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Responsabilite').subscribe(() => {
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
