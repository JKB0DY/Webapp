import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hardware } from './hardware';

@Component({
  selector: 'app-hardware',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hardware.component.html',
  styleUrl: './hardware.component.scss'
})
export class HardwareComponent implements OnInit {

  hardware = ["vega", "soundcraft"];
  numberOfLamps = 20;
  hideLamps = false;

  hardeware: Hardware = {
    id: 1,
    modell: "Vega",
    createdAt: new Date("2019-01-16"),
    updatedAt: new Date("2019-01-16"),
    image: "vega.png",
    kaufdatum: new Date("2019-01-16"),
    inhaber: "Max Mustermann",
    hersteller: "Vega GmbH",
    seriennummer: "123456789",
    typ: "Lichtmischpult",
    zustand: "neuwertig",
    zustandBeschreibung: "keine Kratzer",
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideLamps = !this.hideLamps;
  }
}
