import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Agendinha } from "src/app/models/agendinha";
import { AgendinhaService } from "src/app/services/agendinha.service";

@Component({
  selector: "app-read-all",
  templateUrl: "./read-all.component.html",
  styleUrls: ["./read-all.component.css"],
})
export class ReadAllComponent implements OnInit {
  closed = 0;

  list: Agendinha[] = [];
  listFinished: Agendinha[] = [];

  constructor(private service: AgendinhaService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((agendinha) => {
        if (agendinha.finalized) {
          this.listFinished.push(agendinha);
        } else {
          this.list.push(agendinha);
        }
      });
      this.closed = this.listFinished.length;
    });
  }

  finalizar(item: Agendinha): void {
    item.finalized = true;
    this.service.update(item).subscribe((resposta) => {
      this.service.message("Atividade finalizada com sucesso!");
      this.list = this.list.filter((agendinnha) => agendinnha.id != item.id);
      this.closed++;
    });
  }

  delete(id: any): void {
    this.service.delete(id).subscribe((resposta) => {
      if (resposta === null) {
        this.service.message("Agendamento deletado com sucesso!");
        this.list = this.list.filter((agendinnha) => agendinnha.id != id);
      }
    });
  }

  navegarParaFinalizados(): void {
    this.router.navigate(["finalizados"]);
  }
}
