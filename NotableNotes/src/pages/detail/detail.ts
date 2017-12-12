import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.note = this.navParams.get('note');
    console.log('nav-param', this.note);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
