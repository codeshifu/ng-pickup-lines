import { Component, OnInit } from "@angular/core";
import { PickupLineService } from "../pickup-line.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-pickup-line",
  template: `
    <section class="pickup-line-wrapper">
      <h1 class="pickup-line">{{ pickupLine }}</h1>
      <app-spinner *ngIf="loading"></app-spinner>
      <button (click)="getRandomPickupLine()">Refresh</button>
    </section>
  `
})
export class PickupLineComponent implements OnInit {
  pickupLine: String = "";
  loading: Boolean = true;

  constructor(private service: PickupLineService) {}

  ngOnInit() {
    this.getRandomPickupLine();
  }

  getRandomPickupLine() {
    this.loading = true;
    this.pickupLine = "";

    this.service.getPickupLine().subscribe(pickupLine => {
      this.pickupLine = pickupLine;
      this.loading = false;
    });
  }
}
