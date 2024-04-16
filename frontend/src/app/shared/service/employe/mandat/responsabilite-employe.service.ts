import { Injectable } from '@angular/core';
import {AbstractService} from "../../../../zynerator/service/AbstractService";
import {ResponsabiliteDto} from "../../../model/mandat/Responsabilite.model";
import {ResponsabiliteCriteria} from "../../../criteria/mandat/ResponsabiliteCriteria.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResponsabiliteEmployeService extends AbstractService<ResponsabiliteDto, ResponsabiliteCriteria> {

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ResponsabiliteDto {
        return new ResponsabiliteDto();
    }

    public constrcutCriteria(): ResponsabiliteCriteria {
        return new ResponsabiliteCriteria();
    }

    get API() {
        return environment.apiUrlBudgetInstitutservice + 'employe/responsabilite/';
    }

}
