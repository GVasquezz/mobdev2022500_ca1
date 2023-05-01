import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';



@Component({
  
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone : true,
  imports: [IonicModule,CommonModule,FormsModule,SharedModule],

 
})
export class HomePage implements OnInit {
loadData($event: Event) {
throw new Error('Method not implemented.');
}

   
  characters: any[] = [];
  params= {} as any;

  constructor(
    private rickAndMortySvc: RickAndMortyService
  ) {  }

  ngOnInit() {
    this.params.page= 0;
    this.getCharacters()
  }

  // GET CHARACTERS
getCharacters(event?: any){

   this.params.page += 1;

   this.rickAndMortySvc.getCharacters(this.params).subscribe({
    
    next: (res: any) => {
          
      this.characters.push(...res.results)
      console.log(this.characters);

      if(event) event.target.complete();
    },
   
    error: (error: any) => {

      if(event) event.target.complete();

    }
   })

}

// METHOD SEARCH CHARACTERS BY NAME
searchCharacters(){

  this.params.page = 1;

  this.rickAndMortySvc.getCharacters(this.params).subscribe({
   
   next: (res: any) => {
         
     this.characters = res.results
     
   },
  
   error: (error: any) => {

    

   }
  })

}

}