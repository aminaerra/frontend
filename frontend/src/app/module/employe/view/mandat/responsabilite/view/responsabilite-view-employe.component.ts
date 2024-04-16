import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ResponsabiliteAdminService} from 'src/app/shared/service/admin/mandat/ResponsabiliteAdmin.service';
import {ResponsabiliteDto} from 'src/app/shared/model/mandat/Responsabilite.model';
import {ResponsabiliteCriteria} from 'src/app/shared/criteria/mandat/ResponsabiliteCriteria.model';
import {
    ResponsabiliteEmployeService
} from "../../../../../../shared/service/employe/mandat/responsabilite-employe.service";

@Component({
  selector: 'app-responsabilite-view-employe',
  templateUrl: './responsabilite-view-employe.component.html'
})
export class ResponsabiliteViewEmployeComponent extends AbstractViewController<ResponsabiliteDto, ResponsabiliteCriteria, ResponsabiliteEmployeService> implements OnInit {


    constructor(private responsabiliteService: ResponsabiliteEmployeService){
        super(responsabiliteService);
    }

    ngOnInit(): void {
    }




}
