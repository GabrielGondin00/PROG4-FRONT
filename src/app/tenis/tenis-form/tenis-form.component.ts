import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenis } from '../shared/tenis';
import { TenisService } from '../shared/tenis.service';

@Component({
  selector: 'app-tenis-form',
  templateUrl: './tenis-form.component.html',
  styleUrls: ['./tenis-form.component.css']
})
export class TenisFormComponent implements OnInit {
tenis: Tenis = new Tenis();
constructor(private tenisService: TenisService,
  private route: ActivatedRoute,
  private router:  Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.tenisService.getById(parseInt(id)).subscribe( (tenis)  =>{
         if(tenis){
          this.tenis = tenis;
         }
      }, erro => {
        alert("Não foi possível inserir seu sneaker com esse ID")
      });
    }
  }

  public salvar(tenis: Tenis){
    let acao="cadastrado";
    if(tenis.id){
      acao="alterado";
    }
    this.tenisService.salvar(tenis).subscribe((tenis)=>{
    alert("Tenis"+acao+ +tenis.id);
    this.router.navigate(['tenis'])
    }, erro => {
    alert(erro?.error?.message);
    console.log(erro);
   })
   
  }

}
