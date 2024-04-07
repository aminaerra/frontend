import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ExpressionBesoinDetailDto} from 'src/app/shared/model/expressionbesoin/ExpressionBesoinDetail.model';
import {ExpressionBesoinDetailCriteria} from 'src/app/shared/criteria/expressionbesoin/ExpressionBesoinDetailCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinDetailAdminService extends AbstractService<ExpressionBesoinDetailDto, ExpressionBesoinDetailCriteria> {
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
        return environment.apiUrlBudgetInstitutservice + 'admin/expressionBesoinDetail/';
    }
}
