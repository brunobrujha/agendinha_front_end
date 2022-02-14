import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendinha } from 'src/app/models/agendinha';
import { AgendinhaService } from 'src/app/services/agendinha.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  agendinha: Agendinha = {
    title: "",
    description: "",
    dateForFinish: new Date(),
    finalized: false,
  };

  constructor(private router: Router, private service: AgendinhaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.agendinha.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

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

  findById(): void{
    this.service.findById(this.agendinha.id).subscribe((resposta)=>{
      this.agendinha  = resposta;
    })
  }

  update(): void {
    this.service.update(this.agendinha).subscribe((resposta)=>{
      this.service.message('Informações atualizadas com sucesso!');
      this.router.navigate(['']);
    });
  }

  formataData(): void {
    let data = new Date(this.agendinha.dateForFinish);
    this.agendinha.dateForFinish = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
