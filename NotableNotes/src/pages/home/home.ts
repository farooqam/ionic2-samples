import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private notes;
  
  constructor(public navCtrl: NavController, private noteService: NoteService) {
    this.notes = noteService.notes;
  }

  public onItemClick(note: any) {
    console.log('item-click', note);
    this.navCtrl.push('DetailPage', {note: note});
  }

}
