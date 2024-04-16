import {Component, OnInit} from '@angular/core';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeCriteria} from 'src/app/shared/criteria/commun/EmployeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {environment} from 'src/environments/environment';

import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EmployeEmployeService} from "../../../../../../shared/service/employe/commun/employe-employe.service";
import {EntiteAdminEmployeService} from "../../../../../../shared/service/employe/commun/entite-admin-employe.service";


@Component({
  selector: 'app-employe-list-employe',
  templateUrl: './employe-list-employe.component.html'
})
export class EmployeListEmployeComponent extends AbstractListController<EmployeDto, EmployeCriteria, EmployeEmployeService>  implements OnInit {

    override fileName = 'Employe';


    entiteAdmins: Array<EntiteAdminDto>;


    constructor( private employeService: EmployeEmployeService  , private entiteAdminService: EntiteAdminEmployeService) {
        super(employeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Employe').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadEntiteAdmin();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'entiteAdmin?.libelle', header: 'Entite admin'},
        ];
    }


    public async loadEntiteAdmin(){
       this.entiteAdminService.findAllOptimized().subscribe(entiteAdmins => this.entiteAdmins = entiteAdmins, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                'Entite admin': e.entiteAdmin?.libelle ,
            }
        });

        this.criteriaData = [{
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
        //'Entite admin': this.criteria.entiteAdmin?.libelle ? this.criteria.entiteAdmin?.libelle : environment.emptyForExport ,
        }];
      }
}
