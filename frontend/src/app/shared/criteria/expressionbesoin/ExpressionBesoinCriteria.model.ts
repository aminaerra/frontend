import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EntiteAdminCriteria} from '../commun/EntiteAdminCriteria.model';
import {ExpressionBesoinDetailCriteria} from './ExpressionBesoinDetailCriteria.model';
import {EmployeCriteria} from '../commun/EmployeCriteria.model';

export class ExpressionBesoinCriteria  extends BaseCriteria  {

    public id: number;
    public description: string;
    public descriptionLike: string;
    public dateExpression: Date;
    public dateExpressionFrom: Date;
    public dateExpressionTo: Date;
  public employe: EmployeCriteria ;
  public employes: Array<EmployeCriteria> ;
  public entiteAdmin: EntiteAdminCriteria ;
  public entiteAdmins: Array<EntiteAdminCriteria> ;
      public expressionBesoinDetails: Array<ExpressionBesoinDetailCriteria>;

}
