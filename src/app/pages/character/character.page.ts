import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  profileId: string = ''; // Inicializar con un valor por defecto
  character: any; // Declarar la propiedad para almacenar la información del personaje

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id') || ''; // Asignar un valor por defecto en caso de que sea nulo

    this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
      .subscribe((res: any) => {
        this.character = res;
        console.log(this.character); // Puedes imprimir el resultado en la consola para verificar
      });
  }

}
