import { Injectable } from '@angular/core';
import {AbstractService} from "../../../../zynerator/service/AbstractService";
import {ExpressionBesoinDto} from "../../../model/expressionbesoin/ExpressionBesoin.model";
import {ExpressionBesoinCriteria} from "../../../criteria/expressionbesoin/ExpressionBesoinCriteria.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {ExpressionBesoinDetailDto} from "../../../model/expressionbesoin/ExpressionBesoinDetail.model";
import {ExpressionBesoinDetailCriteria} from "../../../criteria/expressionbesoin/ExpressionBesoinDetailCriteria.model";

@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinDetailEmployeService extends AbstractService<ExpressionBesoinDetailDto, ExpressionBesoinDetailCriteria> {

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ExpressionBesoinDetailDto {
        return new ExpressionBesoinDetailDto();
    }

    public constrcutCriteria(): ExpressionBesoinDetailCriteria {
        return new ExpressionBesoinDetailCriteria();
    }

    get API() {
        return environment.apiUrlBudgetInstitutservice + 'employe/expressionBesoinDetail/';
    }

}
