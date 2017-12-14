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
  private isNewNote: boolean = false;
  private discardChanges: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private noteService: NoteService,
    private alertCtrl: AlertController) {
      this.note = this.navParams.get('note');

      if(!this.note) {
        this.note = {
          id: '',
          date: '',
          title: '',
          content: ''
        };

        this.isNewNote = true;
      }
  }

  public onDelete() {

    if(this.isNewNote) {
      // new note, disccard changes and return
      this.discardChanges = true;
      this.navCtrl.pop();
      return;
    }

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

  ionViewWillLeave() {
    if(this.discardChanges) {
      // do nothing
      return;
    }

    if(this.note.title === '' && this.note.date === '' && this.note.content === '') {
      // blank note - don't do anything
      return;
    } 
    
    if(this.isNewNote) {
      this.noteService.addNote(this.note);
      return;
    } 

    // editing note - don't do anything
  }
}
