import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CategorieProduitAdminService} from 'src/app/shared/service/admin/produit/CategorieProduitAdmin.service';
import {CategorieProduitDto} from 'src/app/shared/model/produit/CategorieProduit.model';
import {CategorieProduitCriteria} from 'src/app/shared/criteria/produit/CategorieProduitCriteria.model';



@Component({
  selector: 'app-categorie-produit-edit-admin',
  templateUrl: './categorie-produit-edit-admin.component.html'
})
export class CategorieProduitEditAdminComponent extends AbstractEditController<CategorieProduitDto, CategorieProduitCriteria, CategorieProduitAdminService>   implements OnInit {


    private _validCategorieProduitLibelle = true;
    private _validCategorieProduitCode = true;




    constructor( private categorieProduitService: CategorieProduitAdminService ) {
        super(categorieProduitService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validCategorieProduitLibelle = value;
        this.validCategorieProduitCode = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategorieProduitLibelle();
        this.validateCategorieProduitCode();
    }
    public validateCategorieProduitLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCategorieProduitLibelle = false;
        } else {
            this.validCategorieProduitLibelle = true;
        }
    }
    public validateCategorieProduitCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCategorieProduitCode = false;
        } else {
            this.validCategorieProduitCode = true;
        }
    }






    get validCategorieProduitLibelle(): boolean {
        return this._validCategorieProduitLibelle;
    }
    set validCategorieProduitLibelle(value: boolean) {
        this._validCategorieProduitLibelle = value;
    }
    get validCategorieProduitCode(): boolean {
        return this._validCategorieProduitCode;
    }
    set validCategorieProduitCode(value: boolean) {
        this._validCategorieProduitCode = value;
    }

}
