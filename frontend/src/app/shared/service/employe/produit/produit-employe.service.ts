import { Injectable } from '@angular/core';
import {AbstractService} from "../../../../zynerator/service/AbstractService";
import {ProduitDto} from "../../../model/produit/Produit.model";
import {ProduitCriteria} from "../../../criteria/produit/ProduitCriteria.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProduitEmployeService extends AbstractService<ProduitDto, ProduitCriteria> {

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ProduitDto {
        return new ProduitDto();
    }

    public constrcutCriteria(): ProduitCriteria {
        return new ProduitCriteria();
    }

    get API() {
        return environment.apiUrlBudgetInstitutservice + 'employe/produit/';
    }

}
