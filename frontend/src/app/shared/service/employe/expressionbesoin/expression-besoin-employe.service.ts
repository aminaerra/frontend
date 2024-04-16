import { Injectable } from '@angular/core';
import {AbstractService} from "../../../../zynerator/service/AbstractService";
import {ExpressionBesoinDto} from "../../../model/expressionbesoin/ExpressionBesoin.model";
import {ExpressionBesoinCriteria} from "../../../criteria/expressionbesoin/ExpressionBesoinCriteria.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinEmployeService extends AbstractService<ExpressionBesoinDto, ExpressionBesoinCriteria> {

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ExpressionBesoinDto {
        return new ExpressionBesoinDto();
    }

    public constrcutCriteria(): ExpressionBesoinCriteria {
        return new ExpressionBesoinCriteria();
    }

    get API() {
        return environment.apiUrlBudgetInstitutservice + 'employe/expressionBesoin/';
    }

}
