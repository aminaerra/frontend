import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EmployeDto} from './Employe.model';

export class EntiteAdminDto extends BaseDto{

    public code: string;

    public libelle: string;

    public chef: EmployeDto ;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';

        }

}
