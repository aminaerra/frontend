import { Injectable } from '@angular/core';
import {AbstractService} from "../../../../zynerator/service/AbstractService";
import {CategorieProduitDto} from "../../../model/produit/CategorieProduit.model";
import {CategorieProduitCriteria} from "../../../criteria/produit/CategorieProduitCriteria.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategorieProduitEmployeService extends AbstractService<CategorieProduitDto, CategorieProduitCriteria> {

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CategorieProduitDto {
        return new CategorieProduitDto();
    }

    public constrcutCriteria(): CategorieProduitCriteria {
        return new CategorieProduitCriteria();
    }

    get API() {
        return environment.apiUrlBudgetInstitutservice + 'employe/categorieProduit/';
    }

}
