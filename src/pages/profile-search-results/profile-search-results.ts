import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
import { GithubServiceProvider }  from '../../providers/github-service/github.service';


/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private github:GithubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewWillLoad(){
   this.username = this.navParams.get("username");
   if (this.username) {
    this.getUserInformation();
    this.getRepositoryInformation();
   }
  }

  getUserInformation(): void {
    console.log("in the getUserInforation()");
    this.github.getUserInformation(this.username).subscribe((data: User) => this.user = data);
    //this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
  }

  getRepositoryInformation(): void {
    console.log("in the getRepositoryInforation()");
    //this.github.mockGetRepositroyInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
    this.github.getRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
  }

}
