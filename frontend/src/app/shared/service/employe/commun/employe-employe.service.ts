import { Injectable } from '@angular/core';
import {AbstractService} from "../../../../zynerator/service/AbstractService";
import {EmployeDto} from "../../../model/commun/Employe.model";
import {EmployeCriteria} from "../../../criteria/commun/EmployeCriteria.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeEmployeService extends AbstractService<EmployeDto, EmployeCriteria> {

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EmployeDto {
        return new EmployeDto();
    }

    public constrcutCriteria(): EmployeCriteria {
        return new EmployeCriteria();
    }

    get API() {
        return environment.apiUrlBudgetInstitutservice + 'employe/employe/';
    }
}
