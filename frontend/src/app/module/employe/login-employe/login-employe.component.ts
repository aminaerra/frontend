import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {AuthService} from "../../../zynerator/security/shared/service/Auth.service";
import {LayoutService} from "../../../layout/service/app.layout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-employe',
  templateUrl: './login-employe.component.html',
  styleUrls: ['./login-employe.component.scss']
})
export class LoginEmployeComponent implements OnInit{

    loginForm = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
    });

    messages: Message[] = [];

    constructor(private authService: AuthService,public layoutService: LayoutService, private router: Router) { }

    ngOnInit(): void {
        this.messages = [];
    }

    submit(){
        const formValues = this.loginForm.value;
        const username = formValues.username;
        const passowrd = formValues.password;
        this.authService.login(username, passowrd);

    }
    register(){
        this.router.navigate(['/employe/register']);
    }

}
