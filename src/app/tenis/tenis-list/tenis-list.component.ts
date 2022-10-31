import { Component, OnInit } from '@angular/core';
import { Tenis } from '../shared/tenis';
import { TenisService } from '../shared/tenis.service';


@Component({
  selector: 'app-tenis-list',
  templateUrl: './tenis-list.component.html',
  styleUrls: ['./tenis-list.component.css']
})

export class TenisListComponent implements OnInit {
 tenis: Tenis[] = [];
  
constructor(private tenisService: TenisService) { }

  ngOnInit(): void {
    console.log("antes");
   
    this.tenisService.getTenis().subscribe((tenis:Tenis[]) => {
       console.log("Tenis",tenis);
       this.tenis = tenis;
    });

    console.log("depois");
  }

  confirmaRemocao(tenis:Tenis){
    let mensagem ="Remover o tênis : "+tenis.marca+" "+tenis.modelo+" "+"número:" +tenis.tamanho+"?";
    if(confirm(mensagem)){
    this.tenisService.remover(tenis.id).subscribe( (tenis)=> {
      let tenisIdx= this.tenis.findIndex ((value) => value.id == tenis.id);
      this.tenis.splice(tenisIdx, 1);
      alert("Removido com  sucesso");
    },erro => {
      alert("Erro ao remover. Mensagem:"+erro?.error?.message);
    });
    }
  }
}
