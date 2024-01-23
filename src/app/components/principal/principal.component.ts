import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";


@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.css',
    imports: [HeaderComponent]
})
export class PrincipalComponent {

}
