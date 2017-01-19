import electronGoogleOauth from 'electron-google-oauth';
const {app, BrowserWindow} = require('electron');

const browserWindowParams = {
    'use-content-size': true,
    center: true,
    show: true,
    resizable: false,
    'always-on-top': true,
    'standard-window': true,
    'auto-hide-menu-bar': true,
    'node-integration': false
};

const googleOauth = electronGoogleOauth(browserWindowParams);
function createOAuthWindow() {
  ( async () => {

    console.dir("yes hello")

    // retrieve access token and refresh token
    const result = await googleOauth.getAccessToken(
      ['https://www.googleapis.com/auth/userinfo.email'],
      '249464630588-fji8hrg3mga0bcvb4t42m7l81jf26rkr.apps.googleusercontent.com',
      '8xOt4eARAOzuJWcrPa4GXng6',
    );
console.dir("done")
    console.dir(result);

  })();
}

module.exports = {
  createOAuthWindow,
}

//app.on('activate', () => {
//  if (win === null) {
//    createWindow()
//  }
//})
//
//app.on('ready', createWindow)
