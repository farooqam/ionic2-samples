import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    private noteService: NoteService,
    private alertCtrl: AlertController) {
      this.note = this.navParams.get('note');
      console.log('nav-param', this.note);
  }

  public onDelete() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Deleting a note is permanent. Are you sure you want to cotinue?',
      buttons: [
        {text: 'Cancel'},
        {text: 'Delete', handler: () => {
          this.noteService.deleteNote(this.note);
          this.navCtrl.pop();
        }}
      ]
    });
    
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
