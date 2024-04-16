import {Injectable} from '@angular/core';
import {AbstractService} from "../../../../zynerator/service/AbstractService";
import {BudgetEntiteAdminDto} from "../../../model/budget/BudgetEntiteAdmin.model";
import {BudgetEntiteAdminCriteria} from "../../../criteria/budget/BudgetEntiteAdminCriteria.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BudgetEntiteAdminEmployeService extends AbstractService<BudgetEntiteAdminDto, BudgetEntiteAdminCriteria> {

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): BudgetEntiteAdminDto {
        return new BudgetEntiteAdminDto();
    }

    public constrcutCriteria(): BudgetEntiteAdminCriteria {
        return new BudgetEntiteAdminCriteria();
    }

    get API() {
        return environment.apiUrlBudgetInstitutservice + 'employe/budgetEntiteAdmin/';
    }



}
