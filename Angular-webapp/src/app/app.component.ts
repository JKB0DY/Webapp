import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HardwareComponent } from "./hardware/hardware.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HardwareComponent]
})
export class AppComponent {
    title = 'Angular-Webapp';
}
