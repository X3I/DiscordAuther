# DiscordAuther
A simple, small, yet useful utility tool for verifying authenticated user's Discord identity.

## Usage

```js
var Auther = require('discordauther');
var session = new Auther('d0Bfl3FlzvVZX20CmWFls');
// Takes the recieved bearer token as first param
session.on('ready', s => {
  console.log(s);
});
session.on('error', e => {
  console.log(e);
});
```
