var request = require('request');
module.exports = class Authenticator {
  constructor (accessToken) {
    if (!accessToken) {
      throw new Error("Missing token!");
    }
    this.token = accessToken;
    this.id;
    this.options = {
      url: 'https://discordapp.com/api/users/@me',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    };
    var $this = this;
    this.callback = function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        $this.id = info.id;
        $this.avatar = 'https://cdn.discordapp.com/avatars/' + info.id + '/' + info.avatar + '.jpg';
        $this.discriminator = info.discriminator;
        $this.name = info.username;
      }
    };
    request(this.options, this.callback);
  }
  getUser() {
    return this;
  }
  reAuth () {
    return request(this.options, this.callback);
  }
};
