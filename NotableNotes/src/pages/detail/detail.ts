import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from '../../services/note.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public note: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private noteService: NoteService) {
    this.note = this.navParams.get('note');
    console.log('nav-param', this.note);
  }

  public onDelete() {
    this.noteService.deleteNote(this.note);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
