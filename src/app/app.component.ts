import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private facebookAuthEndpoint = 'https://www.facebook.com/v2.10/dialog/oauth';
  private responseType = 'token';
  private clientId = '';
  private redirectUrl = 'http://travelbuddyapp.com:8080/callback.html';
  private scope = 'public_profile user_friends';
  title = 'My First Angular Application';
  constructor(private httpClient: HttpClient) {
    // tslint:disable-next-line:max-line-length
    httpClient.get('https://graph.facebook.com/oauth/access_token?response_type=token&client_id=&state=xyz&redirect_uri=https://localhost:4200/')
      .subscribe(data => console.log(data));
  }
}
