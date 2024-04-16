import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from "../../zynerator/security/guards/auth.guard";
import {LoginEmployeComponent} from "./login-employe/login-employe.component";
import {RegisterEmployeComponent} from "./register-employe/register-employe.component";


@NgModule({
  imports: [RouterModule.forChild(
      [
          {
              path: '',
              children: [
                  {
                      path: 'login',
                      children: [
                          {
                              path: '',
                              component: LoginEmployeComponent ,
                              canActivate: [AuthGuard]
                          }
                      ]
                  },
                  {
                      path: 'register',
                      children: [
                          {
                              path: '',
                              component: RegisterEmployeComponent,
                              canActivate: [AuthGuard]
                          }
                      ]
                  },
                  {
                      path: 'expressionbesoin',
                      loadChildren: () => import('src/app/module/employe/view/expressionbesoin/expressionbesoin-employe-routing.module').then(x => x.ExpressionbesoinEmployeRoutingModule),
                      canActivate: [AuthGuard],
                  },
                  {
                      path: 'produit',
                      loadChildren: () => import('src/app/module/employe/view/produit/produit-employe-routing.module').then(x => x.ProduitEmployeRoutingModule),
                      canActivate: [AuthGuard],
                  },
                  {
                      path: 'mandat',
                      loadChildren: () => import('src/app/module/employe/view/mandat/mandat-employe-routing.module').then(x => x.MandatEmployeRoutingModule),
                      canActivate: [AuthGuard],
                  },
                  {
                      path: 'commun',
                      loadChildren: () => import('src/app/module/employe/view/commun/commun-employe-routing.module').then(x => x.CommunEmployeRoutingModule),
                      canActivate: [AuthGuard],
                  },
                  {
                      path: 'budget',
                      loadChildren: () => import('src/app/module/employe/view/budget/budget-employe-routing.module').then(x => x.BudgetEmployeRoutingModule),
                      canActivate: [AuthGuard],
                  },
                  {
                      path: 'security',
                      loadChildren: () => import('../security/security-routing.module').then(x => x.SecurityRoutingModule),
                      canActivate: [AuthGuard],
                  }
              ]
          },
      ]
  )],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
