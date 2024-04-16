import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {BudgetEntiteAdminAdminService} from 'src/app/shared/service/admin/budget/BudgetEntiteAdminAdmin.service';
import {BudgetEntiteAdminDto} from 'src/app/shared/model/budget/BudgetEntiteAdmin.model';
import {BudgetEntiteAdminCriteria} from 'src/app/shared/criteria/budget/BudgetEntiteAdminCriteria.model';

import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {BudgetDto} from 'src/app/shared/model/budget/Budget.model';
import {BudgetAdminService} from 'src/app/shared/service/admin/budget/BudgetAdmin.service';
import {
    BudgetEntiteAdminEmployeService
} from "../../../../../../shared/service/employe/budget/budget-entite-admin-employe.service";
import {EntiteAdminEmployeService} from "../../../../../../shared/service/employe/commun/entite-admin-employe.service";

@Component({
  selector: 'app-budget-entite-admin-view-employe',
  templateUrl: './budget-entite-admin-view-employe.component.html'
})
export class BudgetEntiteAdminViewEmployeComponent extends AbstractViewController<BudgetEntiteAdminDto, BudgetEntiteAdminCriteria, BudgetEntiteAdminEmployeService> implements OnInit {


    constructor(private budgetEntiteAdminService: BudgetEntiteAdminEmployeService, private entiteAdminService: EntiteAdminEmployeService, private budgetService: BudgetAdminService){
        super(budgetEntiteAdminService);
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
    get budget(): BudgetDto {
       return this.budgetService.item;
    }
    set budget(value: BudgetDto) {
        this.budgetService.item = value;
    }
    get budgets(): Array<BudgetDto> {
       return this.budgetService.items;
    }
    set budgets(value: Array<BudgetDto>) {
        this.budgetService.items = value;
    }


}
