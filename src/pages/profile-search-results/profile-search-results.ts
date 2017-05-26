import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { User } from '../../models/user.interface';
import { GithubServiceProvider }  from '../../providers/github-service/github.service';


/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;

  constructor(private github:GithubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewWillLoad(){
   this.username = this.navParams.get("username")
   console.log("username: " + this.username)
   this.getUserInformation();
   console.log(this.user)
  }

  getUserInformation(): void {
    this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
  }

}
