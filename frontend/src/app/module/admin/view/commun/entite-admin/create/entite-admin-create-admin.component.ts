import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EntiteAdminAdminService} from 'src/app/shared/service/admin/commun/EntiteAdminAdmin.service';
import {EntiteAdminDto} from 'src/app/shared/model/commun/EntiteAdmin.model';
import {EntiteAdminCriteria} from 'src/app/shared/criteria/commun/EntiteAdminCriteria.model';
import {EmployeDto} from 'src/app/shared/model/commun/Employe.model';
import {EmployeAdminService} from 'src/app/shared/service/admin/commun/EmployeAdmin.service';
@Component({
  selector: 'app-entite-admin-create-admin',
  templateUrl: './entite-admin-create-admin.component.html'
})
export class EntiteAdminCreateAdminComponent extends AbstractCreateController<EntiteAdminDto, EntiteAdminCriteria, EntiteAdminAdminService>  implements OnInit {



   private _validEntiteAdminCode = true;
   private _validEntiteAdminLibelle = true;
    private _validChefNom = true;
    private _validChefPrenom = true;

    constructor( private entiteAdminService: EntiteAdminAdminService , private employeService: EmployeAdminService) {
        super(entiteAdminService);
    }

    ngOnInit(): void {
        this.chef = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.chefs = data);
    }





    public override setValidation(value: boolean){
        this.validEntiteAdminCode = value;
        this.validEntiteAdminLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEntiteAdminCode();
        this.validateEntiteAdminLibelle();
    }

    public validateEntiteAdminCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validEntiteAdminCode = false;
        } else {
            this.validEntiteAdminCode = true;
        }
    }
    public validateEntiteAdminLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validEntiteAdminLibelle = false;
        } else {
            this.validEntiteAdminLibelle = true;
        }
    }


    public async openCreateChef(chef: string) {
    const isPermistted = await this.roleService.isPermitted('Employe', 'add');
    if(isPermistted) {
         this.chef = new EmployeDto();
         this.createChefDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get chef(): EmployeDto {
        return this.employeService.item;
    }
    set chef(value: EmployeDto) {
        this.employeService.item = value;
    }
    get chefs(): Array<EmployeDto> {
        return this.employeService.items;
    }
    set chefs(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }
    get createChefDialog(): boolean {
       return this.employeService.createDialog;
    }
    set createChefDialog(value: boolean) {
        this.employeService.createDialog= value;
    }



    get validEntiteAdminCode(): boolean {
        return this._validEntiteAdminCode;
    }

    set validEntiteAdminCode(value: boolean) {
         this._validEntiteAdminCode = value;
    }
    get validEntiteAdminLibelle(): boolean {
        return this._validEntiteAdminLibelle;
    }

    set validEntiteAdminLibelle(value: boolean) {
         this._validEntiteAdminLibelle = value;
    }

    get validChefNom(): boolean {
        return this._validChefNom;
    }
    set validChefNom(value: boolean) {
        this._validChefNom = value;
    }
    get validChefPrenom(): boolean {
        return this._validChefPrenom;
    }
    set validChefPrenom(value: boolean) {
        this._validChefPrenom = value;
    }


}
