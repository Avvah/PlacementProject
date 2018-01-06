import {Component} from '@angular/core'

@Component({
    selector:'request-register',
    template:`
        <div class=main>
            <div class="header">
                <header>
                    <h1>Request Form</h1>
                </header>
            </div>
            <div class="form-body">
                <form #f="ngForm" (ngSubmit)="onRegister()">
                    <div class="row">
                    <label>Name:</label>
                    <input type="text" [(ngModel)]="register.name" name="name">
                    <br>
                    <br>
                    Email Id:<input type="text" [(ngModel)]="register.mail" name="mail">
                    <br>
                    <br>
                    Contact Number:<input type="text" [(ngModel)]="register.contact" name="contact">
                    <br>
                    <br>
                    City:<input type="text" [(ngModel)]="register.city" name="city">
                    <br>
                    <br>
                    Institution:<input type="text" [(ngModel)]="register.institution" name="institution">
                    <br>
                    <br>
                    Any Questions?<input type="text-area" [(ngModel)]="register.quest" name="quest">
                    <br>
                    <br>
                    <br>
                    <button type="submit" (click)="submit()">Send Request</button>
                    </div>
                </form>
            </div>
        </div>
        `
})
export class RegisterRequestComponent{
    register:Object={};
}
