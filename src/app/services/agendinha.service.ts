import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Agendinha } from "../models/agendinha";

@Injectable({
  providedIn: "root",
})
export class AgendinhaService {
  allUrl = environment.allUrl;
  baseUrl = environment.baseUrl;
  delUrl = environment.delUrl;
  putUrl = environment.putUrl;
  findUrl = environment.findID;

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  findAll(): Observable<Agendinha[]> {
    return this.http.get<Agendinha[]>(this.allUrl);
  }

  findById(id :any): Observable<Agendinha>{
    const url = `${this.findUrl}/${id}`;
    return this.http.get<Agendinha>(url);
  }

  delete(id: any): Observable<void> {
    const url = `${this.delUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 4000,
    });
  }

  create(agendinha : Agendinha): Observable<Agendinha>{
    return this.http.post<Agendinha>(this.baseUrl, agendinha);
  }

  update(item: Agendinha): Observable<Agendinha> {
    const url = `${this.putUrl}/${item.id}`;
    return this.http.put<Agendinha>(url, item);
  }

}
