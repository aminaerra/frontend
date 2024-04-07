import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EntiteAdminDto} from '../commun/EntiteAdmin.model';
import {ExpressionBesoinDetailDto} from './ExpressionBesoinDetail.model';
import {EmployeDto} from '../commun/Employe.model';

export class ExpressionBesoinDto extends BaseDto{

    public description: string;

   public dateExpression: Date;

    public employe: EmployeDto ;
    public entiteAdmin: EntiteAdminDto ;
     public expressionBesoinDetails: Array<ExpressionBesoinDetailDto>;
    

    constructor() {
        super();

        this.description = '';
        this.dateExpression = null;
        this.employe = new EmployeDto() ;
        this.entiteAdmin = new EntiteAdminDto() ;
        this.expressionBesoinDetails = new Array<ExpressionBesoinDetailDto>();

        }

}
