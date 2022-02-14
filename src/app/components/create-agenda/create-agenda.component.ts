import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Agendinha } from "src/app/models/agendinha";
import { AgendinhaService } from "src/app/services/agendinha.service";

@Component({
  selector: "app-create-agenda",
  templateUrl: "./create-agenda.component.html",
  styleUrls: ["./create-agenda.component.css"],
})
export class CreateAgendaComponent implements OnInit {
  agendinha: Agendinha = {
    title: "",
    description: "",
    dateForFinish: new Date(),
    finalized: false,
  };

  constructor(private router: Router, private service: AgendinhaService) {}

  ngOnInit(): void {}

  /*create(): void {
    this.formataData();
    this.service.create(this.agendinha).subscribe(
      (resposta) => {
        this.service.message("Agendamento realizado com sucesso!");
        this.router.navigate([""]);
      },
      (err) => {
        this.service.message("Erro ao criar!");
        this.router.navigate([""]);
      }
    );
  }*/

  create(): void {
    this.formataData();
    this.service.create(this.agendinha).subscribe({
      next: (resposta) => {
        this.service.message("Agendamento realizado com sucesso!"),
          this.router.navigate(['']);
      },
      error: (resposta) => {
        this.service.message("Erro ao criar!");
        this.router.navigate(['']);
      },
    });
  }

  formataData(): void {
    let data = new Date(this.agendinha.dateForFinish);
    this.agendinha.dateForFinish = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  cancel(): void {
    this.router.navigate([""]);
  }
}
