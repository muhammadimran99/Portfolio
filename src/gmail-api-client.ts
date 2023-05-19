import { google } from 'googleapis';
const oauth2Client = new google.auth.OAuth2(
  '280244476260-mvcq26vs4itdsjget7co7ott7jg76hdu.apps.googleusercontent.com',
  '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',
  'https://ng-portfolio-b7ebf.firebaseapp.com/__/auth/handler'
);
const gmail = google.gmail({
  version: 'v1',
  auth: oauth2Client,
});
