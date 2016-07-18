import {Component} from '@angular/core';
import {GitHubService} from '../../services/github';
// import {NavController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(private github: GitHubService) {

  }

  getRepos(){
    this.github.getRepos(this.username).subscribe(
      data =>{
        this.foundRepos = data.json();
      },
      err => console.log(err),
      ()=> console.log('getRepos Completed')
    );
  }
}
