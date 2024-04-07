
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'expressionbesoin',
                            loadChildren: () => import('./view/expressionbesoin/expressionbesoin-admin-routing.module').then(x => x.ExpressionbesoinAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'produit',
                            loadChildren: () => import('./view/produit/produit-admin-routing.module').then(x => x.ProduitAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'mandat',
                            loadChildren: () => import('./view/mandat/mandat-admin-routing.module').then(x => x.MandatAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'commun',
                            loadChildren: () => import('./view/commun/commun-admin-routing.module').then(x => x.CommunAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'achat',
                            loadChildren: () => import('./view/achat/achat-admin-routing.module').then(x => x.AchatAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'budget',
                            loadChildren: () => import('./view/budget/budget-admin-routing.module').then(x => x.BudgetAdminRoutingModule),
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
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
