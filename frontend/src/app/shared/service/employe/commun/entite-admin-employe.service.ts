import { Injectable } from '@angular/core';
import {AbstractService} from "../../../../zynerator/service/AbstractService";
import {EntiteAdminDto} from "../../../model/commun/EntiteAdmin.model";
import {EntiteAdminCriteria} from "../../../criteria/commun/EntiteAdminCriteria.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EntiteAdminEmployeService  extends AbstractService<EntiteAdminDto, EntiteAdminCriteria> {
    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EntiteAdminDto {
        return new EntiteAdminDto();
    }

    public constrcutCriteria(): EntiteAdminCriteria {
        return new EntiteAdminCriteria();
    }

    get API() {
        return environment.apiUrlBudgetInstitutservice + 'employe/entiteAdmin/';
    }

}
