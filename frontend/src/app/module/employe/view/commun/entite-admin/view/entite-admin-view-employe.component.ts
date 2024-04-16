import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminCriteria} from 'src/app/shared/criteria/commun/EntiteAdminCriteria.model';

import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
import {EntiteAdminEmployeService} from "../../../../../../shared/service/employe/commun/entite-admin-employe.service";
import {EmployeEmployeService} from "../../../../../../shared/service/employe/commun/employe-employe.service";
@Component({
  selector: 'app-entite-admin-view-employe',
  templateUrl: './entite-admin-view-employe.component.html'
})
export class EntiteAdminViewEmployeComponent extends AbstractViewController<EntiteAdminDto, EntiteAdminCriteria, EntiteAdminEmployeService> implements OnInit {


    constructor(private entiteAdminService: EntiteAdminEmployeService, private employeService: EmployeEmployeService){
        super(entiteAdminService);
    }

    ngOnInit(): void {
    }


    get chef(): EmployeDto {
       return this.employeService.item;
    }
    set chef(value: EmployeDto) {
        this.employeService.item = value;
    }
    get chefs(): Array<EmployeDto> {
       return this.employeService.items;
    }
    set chefs(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }


}
