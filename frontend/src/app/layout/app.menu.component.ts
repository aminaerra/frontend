import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
    modelAdmin: any[];
    modelEmploye: any[]
constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelEmploye = [
        {
            label: 'Pages',
            icon: 'pi pi-fw pi-briefcase',
            items: [
                {
                    label: 'Mandat',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'Liste responsabilite',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/mandat/responsabilite/list']
                        },
                    ]
                },

                {
                    label: 'Employe',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'Liste employe',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/commun/employe/list']
                        },
                    ]
                },
                {
                    label: 'BudgetEntiteAdmin',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'Liste budget entite admin',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/budget/budget-entite-admin/list']
                        },
                    ]
                },
                {
                    label: 'ExpressionBesoin',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'Liste expression besoin detail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/expressionbesoin/expression-besoin-detail/list']
                        },
                        {
                            label: 'Liste expression besoin',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/expressionbesoin/expression-besoin/list']
                        },
                    ]
                },
                {
                    label: 'EntiteAdmin',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'Liste entite admin',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/commun/entite-admin/list']
                        },
                    ]
                },
                {
                    label: 'Produit',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'Liste produit',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/produit/produit/list']
                        },
                        {
                            label: 'Liste categorie produit',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/produit/categorie-produit/list']
                        },
                    ]
                },

            ]
        }
    ];
    this.modelAdmin =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Mandat',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste responsabilite',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/mandat/responsabilite/list']
								  },
								  {
									label: 'Liste mandat',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/mandat/mandat/list']
								  },
						]
					  },
					  {
						label: 'TypeAchatMateriel',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste type achat materiel',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/achat/type-achat-materiel/list']
								  },
						]
					  },
					  {
						label: 'AchatMateriel',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste achat materiel',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/achat/achat-materiel/list']
								  },
						]
					  },
					  {
						label: 'Budget',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste budget',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/budget/budget/list']
								  },
						]
					  },
					  {
						label: 'AchatMaterielDetail',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste achat materiel detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/achat/achat-materiel-detail/list']
								  },
						]
					  },
					  {
						label: 'Employe',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste employe',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/commun/employe/list']
								  },
						]
					  },
					  {
						label: 'BudgetEntiteAdmin',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste budget entite admin',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/budget/budget-entite-admin/list']
								  },
						]
					  },
					  {
						label: 'ExpressionBesoin',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste expression besoin detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/expressionbesoin/expression-besoin-detail/list']
								  },
								  {
									label: 'Liste expression besoin',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/expressionbesoin/expression-besoin/list']
								  },
						]
					  },
					  {
						label: 'EntiteAdmin',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste entite admin',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/commun/entite-admin/list']
								  },
						]
					  },
					  {
						label: 'Produit',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste produit',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/produit/produit/list']
								  },
								  {
									label: 'Liste categorie produit',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/produit/categorie-produit/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
              this.authService.authenticatedUser.roleUsers.forEach(role => {
                  const roleName: string = this.getRole(role.role.authority);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role.role.authority));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
