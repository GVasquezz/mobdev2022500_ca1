import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';


//IMPORT SHARED MODULE AND RICK-AND-MORTY-SERVICE.
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
  character = null as any;
  episodes: any[] = [];
  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortySvc: RickAndMortyService
  ) { this.characterId= this.actRoute.snapshot.paramMap.get('id') as String // OBTAINS THE ID 
  console.log(this.characterId);
}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getCharacter()
  }



  // GET CHARACTERS 
  getCharacter(){


    this.rickAndMortySvc.getCharacterById(this.characterId).subscribe({
     
     next: (res: any) => {
           
      
      this.character = res;
      this.getEpisodes()
      
     },
     error: (error: any) => {
 
      
 
     }
    })
 
 }


 // GET THE INFORMATION OF EACH EPISODE FOR THAT SPECIFIC CHARACTER
 getEpisodes(){

  for(let url of this.character.episode){


      this.rickAndMortySvc.getByUrl(url).subscribe({
   
   next: (res: any) => {
         
 
    console.log(res);
    this.episodes.push(res)
   },
   error: (error: any) => {

    

   }
  })

}


  } 

 


}
