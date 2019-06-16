import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class PickupLineService {
  constructor(private http: HttpClient) {}

  getPickupLine() {
    return this.http
      .get("https://codeshifu-pickup-lines.glitch.me/api/random")
      .pipe(map((value: any) => value.data));
  }
}
