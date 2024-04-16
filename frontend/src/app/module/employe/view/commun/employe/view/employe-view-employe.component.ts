import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeCriteria} from 'src/app/shared/criteria/commun/EmployeCriteria.model';

import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {EmployeEmployeService} from "../../../../../../shared/service/employe/commun/employe-employe.service";
import {EntiteAdminEmployeService} from "../../../../../../shared/service/employe/commun/entite-admin-employe.service";
@Component({
  selector: 'app-employe-view-employe',
  templateUrl: './employe-view-employe.component.html'
})
export class EmployeViewEmployeComponent extends AbstractViewController<EmployeDto, EmployeCriteria, EmployeEmployeService> implements OnInit {


    constructor(private employeService: EmployeEmployeService, private entiteAdminService: EntiteAdminEmployeService){
        super(employeService);
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


}
