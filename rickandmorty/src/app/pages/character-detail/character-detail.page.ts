import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SharedModule]
})
export class CharacterDetailPage implements OnInit {
 //ADD CHARACTER DETAILS 
  characterId: String = '';

  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService
  ) { this.characterId= this.actRoute.snapshot.paramMap.get('id') as String
  console.log(this.characterId);
}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getCharacter()
  }




  getCharacter(){


    this.rickAndMortySvc.getCharacterById(this.characterId).subscribe({
     
     next: (res: any) => {
           
      console.log(res);
      
     },
     error: (error: any) => {
 
      
 
     }
    })
 
 }

}
