import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { google } from 'googleapis';

@Injectable({
  providedIn: 'root',
})
export class HandleEmailsServiceService {
  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string): Observable<any> {
    return new Observable((observer) => {
      const OAuth2Client = google.auth.OAuth2;
      const oauth2Client = new OAuth2Client(
        '280244476260-mvcq26vs4itdsjget7co7ott7jg76hdu.apps.googleusercontent.com',
        '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',
        'https://ng-portfolio-b7ebf.firebaseapp.com/__/auth/handler'
      );
      const credentials = {
        access_token: 'Yhttps://oauth2.googleapis.com/token',
        refresh_token: 'YOUR_REFRESH_TOKEN',
        scope: 'https://mail.google.com/',
        token_type: 'Bearer',
        expiry_date: Date.now() + 3600000,
      };
      oauth2Client.setCredentials(credentials);
      const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
      const messageBody =
        'From: ' +
        name +
        '\r\n' +
        'To: ' +
        'YOUR_EMAIL_ADDRESS' +
        '\r\n' +
        'Subject: New message from contact form\r\n\r\n' +
        'Name: ' +
        name +
        '\r\n' +
        'Email: ' +
        email +
        '\r\n' +
        'Message: ' +
        message;
      const messageEncoded = Buffer.from(messageBody)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
      const request = gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: messageEncoded,
        },
      });
      request.then(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }
}
