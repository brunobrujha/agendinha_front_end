import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/core';
import { Agendinha } from 'src/app/models/agendinha';
import { AgendinhaService } from 'src/app/services/agendinha.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  listFinished: Agendinha[] = [];

  constructor(private service: AgendinhaService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach( agendinha => {
        if(agendinha.finalized){
          this.listFinished.push(agendinha);
        }
      })
    });
  }

voltar(): void{
  this.router.navigate(['']);
}

}
