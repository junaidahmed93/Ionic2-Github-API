import {Injectable} from '@angular/core';  
import {Http, Headers} from '@angular/http';

@Injectable()
export class GitHubService {  
    constructor(private http: Http) {
    }

    getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }
}